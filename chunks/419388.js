n.d(t, {
    ZP: function () {
        return Z;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(513431),
    s = n(925549),
    o = n(904245),
    c = n(45114),
    d = n(40851),
    u = n(607070),
    h = n(703656),
    p = n(479313),
    m = n(796974),
    f = n(709054),
    g = n(534469),
    C = n(173033),
    x = n(959517),
    v = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: i, jumpTargetOffset: l } = e;
    if (e.has(i) || (!e.hasMoreBefore && i === f.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === l) return i;
        let n = e.getByIndex(e.indexOf(i) + l);
        return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : i;
    }
    let r = [
            i,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            })
        ].sort(f.default.compare),
        a = r.indexOf(i),
        s = null !== (n = r[a + (Math.abs(l) > 0 ? l : 1)]) && void 0 !== n ? n : r[a - 1];
    return null != s ? s : null;
}
let E = {
    scrollTop: 0,
    scrollHeight: 0,
    offsetHeight: 0
};
class b {
    isReady() {
        return this.props.messages.ready;
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore;
    }
    isPinned() {
        return this.pinned;
    }
    isJumping() {
        return this.jumping;
    }
    isDragging() {
        return this.dragging;
    }
    isInitialized() {
        return void 0 === this.initialScrollTop;
    }
    isScrollLoadingDisabled() {
        return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore;
    }
    isActivelyScrolling() {
        return this.scrollCounter >= 5;
    }
    getDocument() {
        var e, t;
        return null === (t = this.ref.current) || void 0 === t ? void 0 : null === (e = t.getScrollerNode()) || void 0 === e ? void 0 : e.ownerDocument;
    }
    getElementFromMessageId(e) {
        let t = this.getDocument(),
            {
                channel: { id: n }
            } = this.props;
        return null == t ? null : (0, g.AP)(t, n, e);
    }
    isScrolledToBottom() {
        let { scrollTop: e, scrollHeight: t, offsetHeight: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - x.kQ && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck();
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = { ...e };
        let { offsetHeight: i, scrollHeight: l } = this.getScrollerState(),
            r = this.isHeightChange(i, l);
        if (((this.offsetHeightCache = i), (this.scrollHeightCache = l), (this.loading = e.messages.loadingMore), this.isInitialized() || this.isReady())) {
            if (!this.isInitialized()) {
                this.restoreScroll();
                return;
            }
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = I(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping()) {
                    null != n ? this.scrollToMessage(n, !0) : (this.jumping = !1);
                    return;
                }
            } else {
                let i;
                let l = t.first();
                null != l && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (i = f.default.extractTimestamp(l.id)), this.scrollToMessage(n, !0, i);
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            s = t.last();
        if (null != a && a.state === v.yb.SENDING && (null == s ? void 0 : s.id) !== a.id) {
            this.setScrollToBottom();
            return;
        }
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e) {
                var c;
                null === (c = this.ref.current) ||
                    void 0 === c ||
                    c.scrollIntoViewNode({
                        node: e,
                        padding: x.kQ,
                        callback: this.handleScroll
                    });
                return;
            }
        }
        r && this.fixScrollPosition(i, l);
    }
    getAnchorData(e, t, n) {
        var i;
        let l = this.getElementFromMessageId(e),
            r = null === (i = this.ref.current) || void 0 === i ? void 0 : i.getScrollerNode();
        if (!(0, a.k)(l) || null == r) return null;
        let { offsetHeight: s } = l,
            o = (0, C.Z)(l, r),
            c = o - t;
        return (
            null != n && (c = Math.max(-s, Math.min(n, c))),
            {
                id: e,
                offsetFromTop: c,
                offsetTop: o,
                offsetHeight: s,
                clamped: null != c
            }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? x.R4 : x.Eo;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            i = this.getScrollerState(),
            { scrollTop: l } = i,
            r = t && l >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            s = (t) => {
                var i;
                return -1 === t ? f.default.castChannelIdAsMessageId(n.id) : null === (i = e._array[t]) || void 0 === i ? void 0 : i.id;
            },
            o = -1,
            c = !1;
        for (;;) {
            let t = s(o);
            if (null == t) break;
            let n = this.getAnchorData(t, l);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > l + r + i.offsetHeight)) break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= l + r || o === e.length - 1) && ((a = n), (c = !0)), o++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            i = e ? -1 : 1,
            l = null,
            r = t._array.length - 1;
        for (let a = e ? r : 0; null != t._array[a]; a += i) {
            let e = t._array[a],
                i = this.getAnchorData(e.id, n);
            if (null != i) {
                l = i;
                break;
            }
        }
        return l;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, a.k)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return {
                node: t,
                fixedScrollTop: t.offsetTop - (e.offsetFromTop + n)
            };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) {
            this.handleScroll();
            return;
        }
        let { node: t, fixedScrollTop: n } = e;
        if (null != this.focusAnchor) {
            var i;
            this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll),
                null === (i = this.ref.current) ||
                    void 0 === i ||
                    i.scrollIntoViewNode({
                        node: t,
                        padding: x.kQ,
                        callback: this.handleScroll
                    });
        } else this.mergeTo(n, this.handleScroll);
        this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), !this.isLoading() && (this.messageFetchAnchor = null);
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor;
    }
    updateFocusAnchor(e, t, n) {
        let i = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != i && (i.offsetFromTop >= n || t > i.offsetTop + i.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        var n;
        this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        var i;
        let l = null === (i = this.ref.current) || void 0 === i ? void 0 : i.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != l &&
            (this.messageFetchAnchor = this.getAnchorData(
                this.messageFetchAnchor.id,
                e,
                this.isInPlaceholderRegion({
                    scrollTop: e,
                    offsetHeight: t,
                    scrollHeight: n
                }) > 0
                    ? t
                    : void 0
            ));
    }
    updateAutomaticAnchor(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == i) return;
        let l = this.getAnchorData(this.automaticAnchor.id, e);
        n && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(l);
    }
    setAutomaticAnchor(e) {
        var t, n;
        (this.automaticAnchor = e), null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id);
    }
    getScrollerState() {
        var e, t;
        return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : E;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            { messages: l, placeholderHeight: r } = this.props;
        return l.hasMoreBefore && t < r && i > n ? 1 : l.hasMoreAfter && t >= i - n - r ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            { messages: l } = this.props;
        return l.hasMoreBefore && t <= this.getOffsetToTriggerLoading('top', e) && i > n ? 1 : l.hasMoreAfter && t >= this.getOffsetToTriggerLoading('bottom', e) ? 2 : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            {
                prevScrollTop: l,
                props: { placeholderHeight: r }
            } = this;
        if (((this.prevScrollTop = t), null == l)) return;
        let a = this.isInPlaceholderRegion(e),
            s = t - l;
        0 !== a && 0 !== s && (1 === a && t + s <= 0 ? (this.mergeTo(r - n), (this.prevScrollTop = r - n)) : 2 === a && t + s >= i - n && (this.mergeTo(i - r), (this.prevScrollTop = i - r)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, c.CZ)(this.props.channel.id, this.props.windowId);
            }));
    }
    fixScrollPosition(e, t) {
        (this.offsetHeightCache = e), (this.scrollHeightCache = t), this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition();
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = I(e);
            if (null == n) return;
            let i = this.getElementFromMessageId(n);
            (0, a.k)(i) ? this.scrollTo(this.getOffsetOrientationFromNode(i, 'middle', t ? this.newMessageBarBuffer() : x.kQ), !0) : this.scrollToNewMessages(!0, 'middle');
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
            i = arguments.length > 2 ? arguments[2] : void 0,
            l = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(x.j1),
            r = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != i && i(), this.handleScroll();
            };
        (this.pinned = !1), (this.jumping = t), null != l ? this.scrollTo(this.getOffsetOrientationFromNode(l, n, this.newMessageBarBuffer()), t, r) : this.scrollTo(this.getOffsetToPreventLoading('top'), t, r);
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
        if (null == l) return 0;
        let r = this.getScrollerState(),
            a = (0, C.Z)(e, l);
        return 'middle' === t ? Math.min(a - 0.5 * r.offsetHeight + 0.5 * e.offsetHeight + -8, a - i) : a - i;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = I(this.props.messages);
        null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== v.d4z.GUILD_VOICE && this.props.channel.type !== v.d4z.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0;
        null === (t = this.ref.current) ||
            void 0 === t ||
            t.scrollTo({
                to: e,
                animate: !u.Z.useReducedMotion && n,
                callback: i
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        var n;
        null === (n = this.ref.current) ||
            void 0 === n ||
            n.mergeTo({
                to: e,
                callback: t
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter) {
            var i, l;
            (i = n), o.Z.jumpToPresent(i.id, v.AQB), (0, h.XU)(null !== (l = i.getGuildId()) && void 0 !== l ? l : v.ME, i.id);
        } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) s.Z.updateChannelDimensions(t.id, 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: i, scrollHeight: l, offsetHeight: r } = this.getScrollerState();
            s.Z.updateChannelDimensions(t.id, i - n, l - n, r, e);
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null === (e = this.ref.current) || void 0 === e || e.scrollPageUp({ animate: t });
    }
    scrollPageDown() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null === (e = this.ref.current) || void 0 === e || e.scrollPageDown({ animate: t });
    }
    scrollToMessage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.ref.current) return;
        if (e === this.props.channel.id) {
            this.scrollTo(0);
            return;
        }
        let i = this.getElementFromMessageId(e);
        !this.isJumping() && t && null != n && !u.Z.useReducedMotion && (f.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), (this.pinned = !1), (this.jumping = !0);
        let l = () => {
            (this.jumping = !1), (0, a.k)(i) && u.Z.keyboardModeEnabled && i.focus({ preventScroll: !0 }), (this.scrollCounter = 0), this.handleScroll(), this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, a.k)(i) ? this.scrollTo(this.getOffsetOrientationFromNode(i, 'middle', this.props.hasUnreads ? this.newMessageBarBuffer() : x.kQ), t, l) : this.scrollToNewMessages(t, 'middle', l);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: i } = t,
            { messages: l, hasUnreads: r, placeholderHeight: a } = this.props;
        if ('top' === e) return l.hasMoreBefore ? (r ? a - x.D4 - 2 : a + 500) : 0;
        return l.hasMoreAfter ? n - i - a - 500 : n - i;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return 'top' === e && t.hasMoreBefore ? (n = 2) : 'bottom' === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n;
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: i } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, i), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e), (this._automaticAnchorCallbacks = r().uniq(this._automaticAnchorCallbacks)), !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = r().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e), (this._scrollCompleteCallbacks = r().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = r().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1), this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)), (0, c.jT)(this.props.channel.id, this.props.windowId);
    }
    constructor(e) {
        var t,
            n,
            l = this;
        if (
            (_(this, 'props', void 0),
            _(this, 'ref', i.createRef()),
            _(this, 'automaticAnchor', null),
            _(this, 'messageFetchAnchor', null),
            _(this, 'focusAnchor', null),
            _(this, 'loading', void 0),
            _(this, 'jumping', !1),
            _(this, 'pinned', void 0),
            _(this, 'dragging', !1),
            _(this, 'isAtBottom', !1),
            _(this, 'prevScrollTop', null),
            _(this, 'anchorTimeout', null),
            _(this, 'initialScrollTop', null),
            _(this, 'acking', !1),
            _(this, 'scrollCounter', 0),
            _(this, 'offsetHeightCache', 0),
            _(this, 'scrollHeightCache', 0),
            _(this, 'scrollTopCache', -1),
            _(this, '_bottomAnchor', null),
            _(this, '_automaticAnchorCallbacks', []),
            _(this, '_scrollCompleteCallbacks', []),
            _(this, 'updateVisibleMessagesDebounced', r().debounce(p.JR, 300)),
            _(this, 'handleScroll', (e) => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    i = this.isScrolledToBottom(n);
                if ((i !== this.isAtBottom && (i ? ((this.isAtBottom = !0), this.props.handleScrollToBottom()) : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache)) (this.scrollCounter = 0), clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), (this.scrollTopCache = n.scrollTop);
                else {
                    if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode())) return;
                    this.scrollTopCache !== n.scrollTop &&
                        ((this.pinned = i),
                        (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                        this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()),
                        (this.scrollTopCache = n.scrollTop),
                        clearTimeout(this.anchorTimeout),
                        (this.anchorTimeout = setTimeout(() => {
                            (this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null);
                            let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                            this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()));
                        }, 35)));
                }
                if ((this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled())) return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
                let l = this.isInScrollTriggerLoadingRegion(n);
                1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n);
            }),
            _(this, 'handleResize', (e, t) => {
                let { offsetHeightCache: n, scrollHeightCache: i } = this;
                'container' === t ? (n = e.contentRect.height) : 'content' === t && (i = e.contentRect.height), this.isHeightChange(n, i) && this.fixScrollPosition(n, i);
            }),
            _(this, 'handleMouseDown', (e) => {
                e.target === e.currentTarget && (this.dragging = !0);
            }),
            _(this, 'handleMouseUp', () => {
                (this.dragging = !1), this.handleScroll();
            }),
            _(this, 'loadMore', function () {
                let e,
                    t,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { messages: i } = l.props;
                if (n) {
                    let e = i.last();
                    null != e && (t = e.id);
                } else {
                    let t = i.first();
                    null != t && (e = t.id);
                }
                (l.messageFetchAnchor = l.findFetchAnchor(n)),
                    (l.loading = !0),
                    o.Z.fetchMessages({
                        channelId: l.props.channel.id,
                        before: e,
                        after: t,
                        limit: v.AQB,
                        truncate: !0
                    });
            }),
            _(this, 'updateStoreDimensionsDebounced', r().debounce(this.updateStoreDimensions, 200)),
            (this.props = e),
            (this.loading = e.messages.loadingMore),
            null != e.messages.jumpTargetId)
        )
            this.pinned = !1;
        else {
            let i = m.Z.isAtBottom(e.channel.id);
            (this.pinned = null == i || i), (this.initialScrollTop = i ? null : null !== (n = null === (t = m.Z.getChannelDimensions(e.channel.id)) || void 0 === t ? void 0 : t.scrollTop) && void 0 !== n ? n : null);
        }
    }
}
function Z(e) {
    let { messages: t, channel: n, compact: l, hasUnreads: r, focusId: a, placeholderHeight: s, canLoadMore: o = !0, handleScrollToBottom: c, handleScrollFromBottom: u } = e,
        { windowId: h } = i.useContext(d.ZP),
        [p] = i.useState(
            () =>
                new b({
                    messages: t,
                    channel: n,
                    compact: l,
                    hasUnreads: r,
                    focusId: a,
                    placeholderHeight: s,
                    canLoadMore: o,
                    windowId: h,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: u
                })
        );
    return (
        p.getSnapshotBeforeUpdate(a),
        i.useLayoutEffect(() =>
            p.mergePropsAndUpdate({
                messages: t,
                channel: n,
                compact: l,
                hasUnreads: r,
                focusId: a,
                placeholderHeight: s,
                canLoadMore: o,
                windowId: h,
                handleScrollToBottom: c,
                handleScrollFromBottom: u
            })
        ),
        i.useLayoutEffect(() => () => p.cleanup(), [p]),
        p
    );
}
