n.d(t, { ZP: () => O }), n(47120), n(230036), n(653041);
var r = n(192379),
    i = n(392711),
    l = n.n(i),
    o = n(374470),
    a = n(925549),
    s = n(904245),
    c = n(45114),
    u = n(40851),
    d = n(607070),
    p = n(703656),
    h = n(479313),
    f = n(796974),
    m = n(709054),
    g = n(534469),
    b = n(173033),
    _ = n(959517),
    C = n(981631);
function y(e, t, n) {
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
function x(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: r, jumpTargetOffset: i } = e;
    if (e.has(r) || (!e.hasMoreBefore && r === m.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === i) return r;
        let n = e.getByIndex(e.indexOf(r) + i);
        return null != (t = null == n ? void 0 : n.id) ? t : r;
    }
    let l = [
            r,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            })
        ].sort(m.default.compare),
        o = l.indexOf(r),
        a = null != (n = l[o + (Math.abs(i) > 0 ? i : 1)]) ? n : l[o - 1];
    return null != a ? a : null;
}
let v = {
    scrollTop: 0,
    scrollHeight: 0,
    offsetHeight: 0
};
class j {
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
        return null == (t = this.ref.current) || null == (e = t.getScrollerNode()) ? void 0 : e.ownerDocument;
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
        return e >= t - n - _.kQ && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck();
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        y(e, t, n[t]);
                    });
            }
            return e;
        })({}, e);
        let { offsetHeight: r, scrollHeight: i } = this.getScrollerState(),
            l = this.isHeightChange(r, i);
        if (((this.offsetHeightCache = r), (this.scrollHeightCache = i), (this.loading = e.messages.loadingMore), this.isInitialized() || this.isReady())) {
            if (!this.isInitialized()) return void this.restoreScroll();
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = x(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping()) return void (null != n ? this.scrollToMessage(n, !0) : (this.jumping = !1));
            } else {
                let r,
                    i = t.first();
                null != i && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (r = m.default.extractTimestamp(i.id)), this.scrollToMessage(n, !0, r);
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let o = e.messages.last(),
            a = t.last();
        if (null != o && o.state === C.yb.SENDING && (null == a ? void 0 : a.id) !== o.id) return void this.setScrollToBottom();
        let { focusId: s } = this.props;
        if (null != s && n !== s) {
            let e = this.getElementFromMessageId(s);
            if (null != e) {
                var c;
                null == (c = this.ref.current) ||
                    c.scrollIntoViewNode({
                        node: e,
                        padding: _.kQ,
                        callback: this.handleScroll
                    });
                return;
            }
        }
        l && this.fixScrollPosition(r, i);
    }
    getAnchorData(e, t, n) {
        var r;
        let i = this.getElementFromMessageId(e),
            l = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        if (!(0, o.k)(i) || null == l) return null;
        let { offsetHeight: a } = i,
            s = (0, b.Z)(i, l),
            c = s - t;
        return (
            null != n && (c = Math.max(-a, Math.min(n, c))),
            {
                id: e,
                offsetFromTop: c,
                offsetTop: s,
                offsetHeight: a,
                clamped: null != c
            }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? _.R4 : _.Eo;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            r = this.getScrollerState(),
            { scrollTop: i } = r,
            l = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            o = null,
            a = (t) => {
                var r;
                return -1 === t ? m.default.castChannelIdAsMessageId(n.id) : null == (r = e._array[t]) ? void 0 : r.id;
            },
            s = -1,
            c = !1;
        for (;;) {
            let t = a(s);
            if (null == t) break;
            let n = this.getAnchorData(t, i);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > i + l + r.offsetHeight)) break;
            if (c) {
                s++;
                continue;
            }
            null != n && (n.offsetTop >= i + l || s === e.length - 1) && ((o = n), (c = !0)), s++;
        }
        return o;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            r = e ? -1 : 1,
            i = null,
            l = t._array.length - 1;
        for (let o = e ? l : 0; null != t._array[o]; o += r) {
            let e = t._array[o],
                r = this.getAnchorData(e.id, n);
            if (null != r) {
                i = r;
                break;
            }
        }
        return i;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, o.k)(t)) continue;
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
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        if (null != this.focusAnchor) {
            var r;
            this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll),
                null == (r = this.ref.current) ||
                    r.scrollIntoViewNode({
                        node: t,
                        padding: _.kQ,
                        callback: this.handleScroll
                    });
        } else this.mergeTo(n, this.handleScroll);
        this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), this.isLoading() || (this.messageFetchAnchor = null);
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor;
    }
    updateFocusAnchor(e, t, n) {
        let r = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != r && (r.offsetFromTop >= n || t > r.offsetTop + r.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        var n;
        this.updateFocusAnchor(null == (n = this.focusAnchor) ? void 0 : n.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        var r;
        let i = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != i &&
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
            r = null == (t = this.ref.current) ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == r) return;
        let i = this.getAnchorData(this.automaticAnchor.id, e);
        n && null != i && null != this.automaticAnchor && (i.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(i);
    }
    setAutomaticAnchor(e) {
        var t, n;
        (this.automaticAnchor = e), null == (t = this._automaticAnchorCallbacks) || t.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null == (n = this._bottomAnchor) ? void 0 : n.id);
    }
    getScrollerState() {
        var e, t;
        return null != (t = null == (e = this.ref.current) ? void 0 : e.getScrollerState()) ? t : v;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            { messages: i, placeholderHeight: l } = this.props;
        return i.hasMoreBefore && t < l && r > n ? 1 : i.hasMoreAfter && t >= r - n - l ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            { messages: i } = this.props;
        return i.hasMoreBefore && t <= this.getOffsetToTriggerLoading('top', e) && r > n ? 1 : i.hasMoreAfter && t >= this.getOffsetToTriggerLoading('bottom', e) ? 2 : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            {
                prevScrollTop: i,
                props: { placeholderHeight: l }
            } = this;
        if (((this.prevScrollTop = t), null == i)) return;
        let o = this.isInPlaceholderRegion(e),
            a = t - i;
        0 !== o && 0 !== a && (1 === o && t + a <= 0 ? (this.mergeTo(l - n), (this.prevScrollTop = l - n)) : 2 === o && t + a >= r - n && (this.mergeTo(r - l), (this.prevScrollTop = r - l)));
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
            let n = x(e);
            if (null == n) return;
            let r = this.getElementFromMessageId(n);
            (0, o.k)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, 'middle', t ? this.newMessageBarBuffer() : _.kQ), !0) : this.scrollToNewMessages(!0, 'middle');
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = null == (e = this.getDocument()) ? void 0 : e.getElementById(_.j1),
            l = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != r && r(), this.handleScroll();
            };
        (this.pinned = !1), (this.jumping = t), null != i ? this.scrollTo(this.getOffsetOrientationFromNode(i, n, this.newMessageBarBuffer()), t, l) : this.scrollTo(this.getOffsetToPreventLoading('top'), t, l);
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = null == (n = this.ref.current) ? void 0 : n.getScrollerNode();
        if (null == i) return 0;
        let l = this.getScrollerState(),
            o = (0, b.Z)(e, i);
        return 'middle' === t ? Math.min(o - 0.5 * l.offsetHeight + 0.5 * e.offsetHeight + -8, o - r) : o - r;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = x(this.props.messages);
        null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== C.d4z.GUILD_VOICE && this.props.channel.type !== C.d4z.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        null == (t = this.ref.current) ||
            t.scrollTo({
                to: e,
                animate: !d.Z.useReducedMotion && n,
                callback: r
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        var n;
        null == (n = this.ref.current) ||
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
            var r;
            s.Z.jumpToPresent(n.id, C.AQB), (0, p.XU)(null != (r = n.getGuildId()) ? r : C.ME, n.id);
        } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) a.Z.updateChannelDimensions(t.id, 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: r, scrollHeight: i, offsetHeight: l } = this.getScrollerState();
            a.Z.updateChannelDimensions(t.id, r - n, i - n, l, e);
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == (e = this.ref.current) || e.scrollPageUp({ animate: t });
    }
    scrollPageDown() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == (e = this.ref.current) || e.scrollPageDown({ animate: t });
    }
    scrollToMessage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.ref.current) return;
        if (e === this.props.channel.id) return void this.scrollTo(0);
        let r = this.getElementFromMessageId(e);
        this.isJumping() || !t || null == n || d.Z.useReducedMotion || (m.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), (this.pinned = !1), (this.jumping = !0);
        let i = () => {
            (this.jumping = !1), (0, o.k)(r) && d.Z.keyboardModeEnabled && r.focus({ preventScroll: !0 }), (this.scrollCounter = 0), this.handleScroll(), this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, o.k)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, 'middle', this.props.hasUnreads ? this.newMessageBarBuffer() : _.kQ), t, i) : this.scrollToNewMessages(t, 'middle', i);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: r } = t,
            { messages: i, hasUnreads: l, placeholderHeight: o } = this.props;
        if ('top' === e)
            if (!i.hasMoreBefore) return 0;
            else return l ? o - _.D4 - 2 : o + 500;
        return i.hasMoreAfter ? n - r - o - 500 : n - r;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return 'top' === e && t.hasMoreBefore ? (n = 2) : 'bottom' === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n;
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, r), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e), (this._automaticAnchorCallbacks = l().uniq(this._automaticAnchorCallbacks)), !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = l().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e), (this._scrollCompleteCallbacks = l().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = l().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1), this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)), (0, c.jT)(this.props.channel.id, this.props.windowId);
    }
    constructor(e) {
        var t,
            n,
            i = this;
        if (
            (y(this, 'props', void 0),
            y(this, 'ref', r.createRef()),
            y(this, 'automaticAnchor', null),
            y(this, 'messageFetchAnchor', null),
            y(this, 'focusAnchor', null),
            y(this, 'loading', void 0),
            y(this, 'jumping', !1),
            y(this, 'pinned', void 0),
            y(this, 'dragging', !1),
            y(this, 'isAtBottom', !1),
            y(this, 'prevScrollTop', null),
            y(this, 'anchorTimeout', null),
            y(this, 'initialScrollTop', null),
            y(this, 'acking', !1),
            y(this, 'scrollCounter', 0),
            y(this, 'offsetHeightCache', 0),
            y(this, 'scrollHeightCache', 0),
            y(this, 'scrollTopCache', -1),
            y(this, '_bottomAnchor', null),
            y(this, '_automaticAnchorCallbacks', []),
            y(this, '_scrollCompleteCallbacks', []),
            y(this, 'updateVisibleMessagesDebounced', l().debounce(h.JR, 300)),
            y(this, 'handleScroll', (e) => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    r = this.isScrolledToBottom(n);
                if ((r !== this.isAtBottom && (r ? ((this.isAtBottom = !0), this.props.handleScrollToBottom()) : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache)) (this.scrollCounter = 0), clearTimeout(this.anchorTimeout), this.isPinned() || (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), (this.scrollTopCache = n.scrollTop);
                else {
                    if (null != e && e.target !== (null == (t = this.ref.current) ? void 0 : t.getScrollerNode())) return;
                    this.scrollTopCache !== n.scrollTop &&
                        ((this.pinned = r),
                        (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                        this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()),
                        (this.scrollTopCache = n.scrollTop),
                        clearTimeout(this.anchorTimeout),
                        (this.anchorTimeout = setTimeout(() => {
                            (this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null);
                            let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                            this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()));
                        }, 35)));
                }
                if ((this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled())) return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(n);
                let i = this.isInScrollTriggerLoadingRegion(n);
                1 === i ? this.loadMore() : 2 === i ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n);
            }),
            y(this, 'handleResize', (e, t) => {
                let { offsetHeightCache: n, scrollHeightCache: r } = this;
                'container' === t ? (n = e.contentRect.height) : 'content' === t && (r = e.contentRect.height), this.isHeightChange(n, r) && this.fixScrollPosition(n, r);
            }),
            y(this, 'handleMouseDown', (e) => {
                e.target === e.currentTarget && (this.dragging = !0);
            }),
            y(this, 'handleMouseUp', () => {
                (this.dragging = !1), this.handleScroll();
            }),
            y(this, 'loadMore', function () {
                let e,
                    t,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { messages: r } = i.props;
                if (n) {
                    let e = r.last();
                    null != e && (t = e.id);
                } else {
                    let t = r.first();
                    null != t && (e = t.id);
                }
                (i.messageFetchAnchor = i.findFetchAnchor(n)),
                    (i.loading = !0),
                    s.Z.fetchMessages({
                        channelId: i.props.channel.id,
                        before: e,
                        after: t,
                        limit: C.AQB,
                        truncate: !0
                    });
            }),
            y(this, 'updateStoreDimensionsDebounced', l().debounce(this.updateStoreDimensions, 200)),
            (this.props = e),
            (this.loading = e.messages.loadingMore),
            null != e.messages.jumpTargetId)
        )
            this.pinned = !1;
        else {
            let r = f.Z.isAtBottom(e.channel.id);
            (this.pinned = null == r || r), (this.initialScrollTop = r ? null : null != (n = null == (t = f.Z.getChannelDimensions(e.channel.id)) ? void 0 : t.scrollTop) ? n : null);
        }
    }
}
function O(e) {
    let { messages: t, channel: n, compact: i, hasUnreads: l, focusId: o, placeholderHeight: a, canLoadMore: s = !0, handleScrollToBottom: c, handleScrollFromBottom: d } = e,
        { windowId: p } = r.useContext(u.ZP),
        [h] = r.useState(
            () =>
                new j({
                    messages: t,
                    channel: n,
                    compact: i,
                    hasUnreads: l,
                    focusId: o,
                    placeholderHeight: a,
                    canLoadMore: s,
                    windowId: p,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: d
                })
        );
    return (
        h.getSnapshotBeforeUpdate(o),
        r.useLayoutEffect(() =>
            h.mergePropsAndUpdate({
                messages: t,
                channel: n,
                compact: i,
                hasUnreads: l,
                focusId: o,
                placeholderHeight: a,
                canLoadMore: s,
                windowId: p,
                handleScrollToBottom: c,
                handleScrollFromBottom: d
            })
        ),
        r.useLayoutEffect(() => () => h.cleanup(), [h]),
        h
    );
}
