(n.d(t, { ZP: () => w }), n(388685), n(642613), n(539854));
var r = n(73800),
    i = n(392711),
    a = n.n(i),
    o = n(374470),
    s = n(925549),
    l = n(904245),
    c = n(45114),
    u = n(40851),
    d = n(607070),
    f = n(703656),
    _ = n(479313),
    p = n(796974),
    h = n(709054),
    m = n(534469),
    g = n(173033),
    E = n(959517),
    b = n(981631);
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
let v = 500,
    I = -8;
function T(e) {
    var t;
    (l.Z.jumpToPresent(e.id, b.AQB), (0, f.XU)(null != (t = e.getGuildId()) ? t : b.ME, e.id));
}
function S(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: r, jumpTargetOffset: i } = e;
    if (e.has(r) || (!e.hasMoreBefore && r === h.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === i) return r;
        let n = e.getByIndex(e.indexOf(r) + i);
        return null != (t = null == n ? void 0 : n.id) ? t : r;
    }
    let a = [
            r,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            })
        ].sort(h.default.compare),
        o = a.indexOf(r),
        s = null != (n = a[o + (Math.abs(i) > 0 ? i : 1)]) ? n : a[o - 1];
    return null != s ? s : null;
}
let A = {
        scrollTop: 0,
        scrollHeight: 0,
        offsetHeight: 0
    },
    N = 5;
class C {
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
        return this.scrollCounter >= N;
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
        return null == t ? null : (0, m.AP)(t, n, e);
    }
    isScrolledToBottom() {
        let { scrollTop: e, scrollHeight: t, offsetHeight: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - 2 && !this.props.messages.hasMoreAfter;
    }
    mergePropsAndUpdate(e) {
        (this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck());
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = O({}, e);
        let { offsetHeight: r, scrollHeight: i } = this.getScrollerState(),
            a = this.isHeightChange(r, i);
        if (((this.offsetHeightCache = r), (this.scrollHeightCache = i), (this.loading = e.messages.loadingMore), this.isInitialized() || this.isReady())) {
            if (!this.isInitialized()) return void this.restoreScroll();
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return;
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = S(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping()) return void (null != n ? this.scrollToMessage(n, !0) : (this.jumping = !1));
            } else {
                let r,
                    i = t.first();
                (null != i && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (r = h.default.extractTimestamp(i.id)), this.scrollToMessage(n, !0, r));
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            ((this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0));
            return;
        }
        let o = e.messages.last(),
            s = t.last();
        if (null != o && o.state === b.yb.SENDING && (null == s ? void 0 : s.id) !== o.id) return void this.setScrollToBottom();
        let { focusId: l } = this.props;
        if (null != l && n !== l) {
            let e = this.getElementFromMessageId(l);
            if (null != e) {
                var c;
                null == (c = this.ref.current) ||
                    c.scrollIntoViewNode({
                        node: e,
                        padding: E.kQ + this.props.additionalMessagePadding,
                        callback: this.handleScroll
                    });
                return;
            }
        }
        a && this.fixScrollPosition(r, i);
    }
    getAnchorData(e, t, n) {
        var r;
        let i = this.getElementFromMessageId(e),
            a = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        if (!(0, o.k)(i) || null == a) return null;
        let { offsetHeight: s } = i,
            l = (0, g.Z)(i, a),
            c = l - t;
        return (
            null != n && (c = Math.max(-s, Math.min(n, c))),
            {
                id: e,
                offsetFromTop: c,
                offsetTop: l,
                offsetHeight: s,
                clamped: null != c
            }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? E.R4 : E.Eo;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            r = this.getScrollerState(),
            { scrollTop: i } = r,
            a = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            o = null,
            s = (t) => {
                var r;
                return -1 === t ? h.default.castChannelIdAsMessageId(n.id) : null == (r = e._array[t]) ? void 0 : r.id;
            },
            l = -1,
            c = !1;
        for (;;) {
            let t = s(l);
            if (null == t) break;
            let n = this.getAnchorData(t, i);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > i + a + r.offsetHeight)) break;
            if (c) {
                l++;
                continue;
            }
            (null != n && (n.offsetTop >= i + a || l === e.length - 1) && ((o = n), (c = !0)), l++);
        }
        return o;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            r = e ? -1 : 1,
            i = null,
            a = t._array.length - 1;
        for (let o = e ? a : 0; null != t._array[o]; o += r) {
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
            (this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll),
                null == (r = this.ref.current) ||
                    r.scrollIntoViewNode({
                        node: t,
                        padding: E.kQ + this.props.additionalMessagePadding,
                        callback: this.handleScroll
                    }));
        } else this.mergeTo(n, this.handleScroll);
        (this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), this.isLoading() || (this.messageFetchAnchor = null));
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
        (n && null != i && null != this.automaticAnchor && (i.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(i));
    }
    setAutomaticAnchor(e) {
        var t, n;
        ((this.automaticAnchor = e), null == (t = this._automaticAnchorCallbacks) || t.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null == (n = this._bottomAnchor) ? void 0 : n.id));
    }
    getScrollerState() {
        var e, t;
        return null != (t = null == (e = this.ref.current) ? void 0 : e.getScrollerState()) ? t : A;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            { messages: i, placeholderHeight: a } = this.props,
            o = a,
            s = r - n - a;
        return i.hasMoreBefore && t < o && r > n ? 1 : i.hasMoreAfter && t >= s ? 2 : 0;
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
                props: { placeholderHeight: a }
            } = this;
        if (((this.prevScrollTop = t), null == i)) return;
        let o = this.isInPlaceholderRegion(e),
            s = t - i;
        0 !== o && 0 !== s && (1 === o && t + s <= 0 ? (this.mergeTo(a - n), (this.prevScrollTop = a - n)) : 2 === o && t + s >= r - n && (this.mergeTo(r - a), (this.prevScrollTop = r - a)));
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
        ((this.offsetHeightCache = e), (this.scrollHeightCache = t), this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition());
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = S(e);
            if (null == n) return;
            let r = this.getElementFromMessageId(n);
            (0, o.k)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, 'middle', t ? this.newMessageBarBuffer() : E.kQ), !0) : this.scrollToNewMessages(!0, 'middle');
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = null == (e = this.getDocument()) ? void 0 : e.getElementById(E.j1),
            a = () => {
                ((this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != r && r(), this.handleScroll());
            };
        ((this.pinned = !1), (this.jumping = t), null != i ? this.scrollTo(this.getOffsetOrientationFromNode(i, n, this.newMessageBarBuffer()), t, a) : this.scrollTo(this.getOffsetToPreventLoading('top'), t, a));
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = null == (n = this.ref.current) ? void 0 : n.getScrollerNode();
        if (null == i) return 0;
        let a = this.getScrollerState(),
            o = (0, g.Z)(e, i);
        return 'middle' === t ? Math.min(o - 0.5 * a.offsetHeight + 0.5 * e.offsetHeight + I, o - r) : o - r;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = S(this.props.messages);
        null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== b.d4z.GUILD_VOICE && this.props.channel.type !== b.d4z.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        (null == (t = this.ref.current) ||
            t.scrollTo({
                to: e,
                animate: !d.Z.useReducedMotion && n,
                callback: r
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced());
    }
    mergeTo(e, t) {
        var n;
        (null == (n = this.ref.current) ||
            n.mergeTo({
                to: e,
                callback: t
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced());
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        t.hasMoreAfter
            ? T(n)
            : this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                  ((this.jumping = !1), this.handleScroll());
              });
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) s.Z.updateChannelDimensions(t.id, 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: r, scrollHeight: i, offsetHeight: a } = this.getScrollerState();
            s.Z.updateChannelDimensions(t.id, r - n, i - n, a, e);
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
        (this.isJumping() || !t || null == n || d.Z.useReducedMotion || (h.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), (this.pinned = !1), (this.jumping = !0));
        let i = () => {
            ((this.jumping = !1), (0, o.k)(r) && d.Z.keyboardModeEnabled && r.focus({ preventScroll: !0 }), (this.scrollCounter = 0), this.handleScroll(), this._scrollCompleteCallbacks.forEach((e) => e()));
        };
        (0, o.k)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, 'middle', this.props.hasUnreads ? this.newMessageBarBuffer() : E.kQ), t, i) : this.scrollToNewMessages(t, 'middle', i);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: r } = t,
            { messages: i, hasUnreads: a, placeholderHeight: o } = this.props;
        if ('top' === e)
            if (!i.hasMoreBefore) return 0;
            else return a ? o - E.D4 - 2 : o + v;
        return i.hasMoreAfter ? n - r - o - v : n - r;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return ('top' === e && t.hasMoreBefore ? (n = 2) : 'bottom' === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n);
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r } = this.getScrollerState();
            (this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, r), this.updateAutomaticAnchor(t));
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        (this._automaticAnchorCallbacks.push(e), (this._automaticAnchorCallbacks = a().uniq(this._automaticAnchorCallbacks)), !0 === t && this.setAutomaticAnchor(this.findAnchor()));
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = a().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        (this._scrollCompleteCallbacks.push(e), (this._scrollCompleteCallbacks = a().uniq(this._scrollCompleteCallbacks)));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = a().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        ((this.acking = !1), this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)), (0, c.jT)(this.props.channel.id, this.props.windowId));
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
            y(this, 'updateVisibleMessagesDebounced', a().debounce(_.JR, 300)),
            y(this, 'handleScroll', (e) => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    r = this.isScrolledToBottom(n);
                if ((r !== this.isAtBottom && (r ? ((this.isAtBottom = !0), this.props.handleScrollToBottom()) : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache)) ((this.scrollCounter = 0), clearTimeout(this.anchorTimeout), this.isPinned() || (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), (this.scrollTopCache = n.scrollTop));
                else {
                    if (null != e && e.target !== (null == (t = this.ref.current) ? void 0 : t.getScrollerNode())) return;
                    this.scrollTopCache !== n.scrollTop &&
                        ((this.pinned = r),
                        (this.scrollCounter = Math.min(this.scrollCounter + 1, N)),
                        this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()),
                        (this.scrollTopCache = n.scrollTop),
                        clearTimeout(this.anchorTimeout),
                        (this.anchorTimeout = setTimeout(() => {
                            ((this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null));
                            let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                            this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()));
                        }, 35)));
                }
                if ((this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled())) return (this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(n));
                let i = this.isInScrollTriggerLoadingRegion(n);
                (1 === i ? this.loadMore() : 2 === i ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n));
            }),
            y(this, 'handleResize', (e, t) => {
                let { offsetHeightCache: n, scrollHeightCache: r } = this;
                ('container' === t ? (n = e.contentRect.height) : 'content' === t && (r = e.contentRect.height), this.isHeightChange(n, r) && this.fixScrollPosition(n, r));
            }),
            y(this, 'handleMouseDown', (e) => {
                e.target === e.currentTarget && (this.dragging = !0);
            }),
            y(this, 'handleMouseUp', () => {
                ((this.dragging = !1), this.handleScroll());
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
                ((i.messageFetchAnchor = i.findFetchAnchor(n)),
                    (i.loading = !0),
                    l.Z.fetchMessages({
                        channelId: i.props.channel.id,
                        before: e,
                        after: t,
                        limit: b.AQB,
                        truncate: !0
                    }));
            }),
            y(this, 'updateStoreDimensionsDebounced', a().debounce(this.updateStoreDimensions, 200)),
            (this.props = e),
            (this.loading = e.messages.loadingMore),
            null != e.messages.jumpTargetId)
        )
            this.pinned = !1;
        else {
            let r = p.Z.isAtBottom(e.channel.id);
            ((this.pinned = null == r || r), (this.initialScrollTop = r ? null : null != (n = null == (t = p.Z.getChannelDimensions(e.channel.id)) ? void 0 : t.scrollTop) ? n : null));
        }
    }
}
function w(e) {
    let { messages: t, channel: n, compact: i, hasUnreads: a, focusId: o, placeholderHeight: s, canLoadMore: l = !0, handleScrollToBottom: c, handleScrollFromBottom: d, additionalMessagePadding: f = 0 } = e,
        { windowId: _ } = r.useContext(u.ZP),
        [p] = r.useState(
            () =>
                new C({
                    messages: t,
                    channel: n,
                    compact: i,
                    hasUnreads: a,
                    focusId: o,
                    placeholderHeight: s,
                    canLoadMore: l,
                    windowId: _,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: d,
                    additionalMessagePadding: f
                })
        );
    return (
        p.getSnapshotBeforeUpdate(o),
        r.useLayoutEffect(() =>
            p.mergePropsAndUpdate({
                messages: t,
                channel: n,
                compact: i,
                hasUnreads: a,
                focusId: o,
                placeholderHeight: s,
                canLoadMore: l,
                windowId: _,
                handleScrollToBottom: c,
                handleScrollFromBottom: d,
                additionalMessagePadding: f
            })
        ),
        r.useLayoutEffect(() => () => p.cleanup(), [p]),
        p
    );
}
