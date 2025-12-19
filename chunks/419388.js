n.d(t, { ZP: () => j }), n(388685), n(642613), n(539854);
var i = n(473749),
    r = n(392711),
    l = n.n(r),
    a = n(374470),
    o = n(925549),
    s = n(904245),
    c = n(45114),
    u = n(607070),
    d = n(728285),
    p = n(703656),
    f = n(479313),
    h = n(796974),
    m = n(709054),
    g = n(534469),
    b = n(173033),
    y = n(959517),
    C = n(981631);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: i, jumpTargetOffset: r } = e;
    if (e.has(i) || (!e.hasMoreBefore && i === m.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === r) return i;
        let n = e.getByIndex(e.indexOf(i) + r);
        return null != (t = null == n ? void 0 : n.id) ? t : i;
    }
    let l = [
            i,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(m.default.compare),
        a = l.indexOf(i),
        o = null != (n = l[a + (Math.abs(r) > 0 ? r : 1)]) ? n : l[a - 1];
    return null != o ? o : null;
}
let O = {
    scrollTop: 0,
    scrollHeight: 0,
    offsetHeight: 0,
};
class E {
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
        return (
            this.isLoading() ||
            !this.isInitialized() ||
            this.isJumping() ||
            this.isDragging() ||
            !this.props.canLoadMore
        );
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
                channel: { id: n },
            } = this.props;
        return null == t ? null : (0, g.AP)(t, n, e);
    }
    isScrolledToBottom() {
        let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - 2 && !this.props.messages.hasMoreAfter;
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
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        v(e, t, n[t]);
                    });
            }
            return e;
        })({}, e);
        let { offsetHeight: i, scrollHeight: r } = this.getScrollerState(),
            l = this.isHeightChange(i, r);
        if (
            ((this.offsetHeightCache = i),
            (this.scrollHeightCache = r),
            (this.loading = e.messages.loadingMore),
            this.isInitialized() || this.isReady())
        ) {
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
                let i,
                    r = t.first();
                null != r &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (i = m.default.extractTimestamp(r.id)),
                    this.scrollToMessage(n, !0, i);
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            o = t.last();
        if (null != a && a.state === C.yb.SENDING && (null == o ? void 0 : o.id) !== a.id)
            return void this.setScrollToBottom();
        let { focusId: s } = this.props;
        if (null != s && n !== s) {
            let e = this.getElementFromMessageId(s);
            if (null != e) {
                var c;
                null == (c = this.ref.current) ||
                    c.scrollIntoViewNode({
                        node: e,
                        padding: y.kQ + this.props.additionalMessagePadding,
                        callback: this.handleScroll,
                    });
                return;
            }
        }
        l && this.fixScrollPosition(i, r);
    }
    getAnchorData(e, t, n) {
        var i;
        let r = this.getElementFromMessageId(e),
            l = null == (i = this.ref.current) ? void 0 : i.getScrollerNode();
        if (!(0, a.kK)(r) || null == l) return null;
        let { offsetHeight: o } = r,
            s = (0, b.Z)(r, l),
            c = s - t;
        return (
            null != n && (c = Math.max(-o, Math.min(n, c))),
            {
                id: e,
                offsetFromTop: c,
                offsetTop: s,
                offsetHeight: o,
                clamped: null != c,
            }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? y.R4 : y.Eo;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            i = this.getScrollerState(),
            { scrollTop: r } = i,
            l = t && r >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            o = (t) => {
                var i;
                return -1 === t ? m.default.castChannelIdAsMessageId(n.id) : null == (i = e._array[t]) ? void 0 : i.id;
            },
            s = -1,
            c = !1;
        for (;;) {
            let t = o(s);
            if (null == t) break;
            let n = this.getAnchorData(t, r);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > r + l + i.offsetHeight)) break;
            if (c) {
                s++;
                continue;
            }
            null != n && (n.offsetTop >= r + l || s === e.length - 1) && ((a = n), (c = !0)), s++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            i = e ? -1 : 1,
            r = null,
            l = t._array.length - 1;
        for (let a = e ? l : 0; null != t._array[a]; a += i) {
            let e = t._array[a],
                i = this.getAnchorData(e.id, n);
            if (null != i) {
                r = i;
                break;
            }
        }
        return r;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, a.kK)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return {
                node: t,
                fixedScrollTop: t.offsetTop - (e.offsetFromTop + n),
            };
        }
        return null;
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let { node: t, fixedScrollTop: n } = e;
        if (null != this.focusAnchor) {
            var i;
            this.isPinned()
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.mergeTo(n, this.handleScroll),
                null == (i = this.ref.current) ||
                    i.scrollIntoViewNode({
                        node: t,
                        padding: y.kQ + this.props.additionalMessagePadding,
                        callback: this.handleScroll,
                    });
        } else this.mergeTo(n, this.handleScroll);
        this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()),
            this.isLoading() || (this.messageFetchAnchor = null);
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
        this.updateFocusAnchor(null == (n = this.focusAnchor) ? void 0 : n.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        var i;
        let r = null == (i = this.ref.current) ? void 0 : i.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != r &&
            (this.messageFetchAnchor = this.getAnchorData(
                this.messageFetchAnchor.id,
                e,
                this.isInPlaceholderRegion({
                    scrollTop: e,
                    offsetHeight: t,
                    scrollHeight: n,
                }) > 0
                    ? t
                    : void 0,
            ));
    }
    updateAutomaticAnchor(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = null == (t = this.ref.current) ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == i) return;
        let r = this.getAnchorData(this.automaticAnchor.id, e);
        n && null != r && null != this.automaticAnchor && (r.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(r);
    }
    setAutomaticAnchor(e) {
        var t, n;
        (this.automaticAnchor = e),
            null == (t = this._automaticAnchorCallbacks) ||
                t.forEach((e) => e(this.automaticAnchor, this._bottomAnchor)),
            this.updateVisibleMessagesDebounced(
                null == e ? void 0 : e.id,
                null == (n = this._bottomAnchor) ? void 0 : n.id,
            );
    }
    getScrollerState() {
        var e, t;
        return null != (t = null == (e = this.ref.current) ? void 0 : e.getScrollerState()) ? t : O;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            { messages: r, placeholderHeight: l } = this.props;
        return r.hasMoreBefore && t < l && i > n ? 1 : r.hasMoreAfter && t >= i - n - l ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            { messages: r } = this.props;
        return r.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && i > n
            ? 1
            : r.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: i } = e,
            {
                prevScrollTop: r,
                props: { placeholderHeight: l },
            } = this;
        if (((this.prevScrollTop = t), null == r)) return;
        let a = this.isInPlaceholderRegion(e),
            o = t - r;
        0 !== a &&
            0 !== o &&
            (1 === a && t + o <= 0
                ? (this.mergeTo(l - n), (this.prevScrollTop = l - n))
                : 2 === a && t + o >= i - n && (this.mergeTo(i - l), (this.prevScrollTop = i - l)));
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
        (this.offsetHeightCache = e),
            (this.scrollHeightCache = t),
            this.fixJumpTarget(),
            this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.fixAnchorScrollPosition();
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let { messages: e, hasUnreads: t } = this.props;
        if (null != e.jumpTargetId) {
            let n = x(e);
            if (null == n) return;
            let i = this.getElementFromMessageId(n);
            (0, a.kK)(i)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(i, "middle", t ? this.newMessageBarBuffer() : y.kQ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            i = arguments.length > 2 ? arguments[2] : void 0,
            r = null == (e = this.getDocument()) ? void 0 : e.getElementById(y.j1),
            l = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != i && i(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = t),
            null != r
                ? this.scrollTo(this.getOffsetOrientationFromNode(r, n, this.newMessageBarBuffer()), t, l)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), t, l);
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = null == (n = this.ref.current) ? void 0 : n.getScrollerNode();
        if (null == r) return 0;
        let l = this.getScrollerState(),
            a = (0, b.Z)(e, r);
        return "middle" === t ? Math.min(a - 0.5 * l.offsetHeight + 0.5 * e.offsetHeight + -8, a - i) : a - i;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = x(this.props.messages);
        null != t
            ? this.scrollToMessage(t, !1)
            : this.props.hasUnreads &&
                this.props.channel.type !== C.d4z.GUILD_VOICE &&
                this.props.channel.type !== C.d4z.GUILD_STAGE_VOICE
              ? this.scrollToNewMessages()
              : null != e
                ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 ? arguments[2] : void 0;
        null == (t = this.ref.current) ||
            t.scrollTo({
                to: e,
                animate: !u.Z.useReducedMotion && n,
                callback: i,
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    mergeTo(e, t) {
        var n;
        null == (n = this.ref.current) ||
            n.mergeTo({
                to: e,
                callback: t,
            }),
            this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced();
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { messages: t, channel: n } = this.props;
        if (t.hasMoreAfter) {
            var i;
            s.Z.jumpToPresent(n.id, C.AQB), (0, p.XU)(null != (i = n.getGuildId()) ? i : C.ME, n.id);
        } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) o.Z.updateChannelDimensions(t.id, 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: i, scrollHeight: r, offsetHeight: l } = this.getScrollerState();
            o.Z.updateChannelDimensions(t.id, i - n, r - n, l, e);
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
        let i = this.getElementFromMessageId(e);
        this.isJumping() ||
            !t ||
            null == n ||
            u.Z.useReducedMotion ||
            (m.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let r = () => {
            (this.jumping = !1),
                (0, a.kK)(i) && ((i.tabIndex = -1), i.focus({ preventScroll: !0 })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, a.kK)(i)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      i,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : y.kQ,
                  ),
                  t,
                  r,
              )
            : this.scrollToNewMessages(t, "middle", r);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: i } = t,
            { messages: r, hasUnreads: l, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!r.hasMoreBefore) return 0;
            else return l ? a - y.D4 - 2 : a + 500;
        return r.hasMoreAfter ? n - i - a - 500 : n - i;
    }
    getOffsetToPreventLoading(e) {
        let { messages: t } = this.props,
            n = 0;
        return (
            "top" === e && t.hasMoreBefore ? (n = 2) : "bottom" === e && t.hasMoreAfter && (n = -2),
            this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
        );
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let { scrollTop: t, offsetHeight: n, scrollHeight: i } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, i), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = l().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = l().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = l().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = l().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, c.jT)(this.props.channel.id, this.props.windowId);
    }
    constructor(e) {
        var t,
            n,
            r = this;
        if (
            (v(this, "props", void 0),
            v(this, "ref", i.createRef()),
            v(this, "automaticAnchor", null),
            v(this, "messageFetchAnchor", null),
            v(this, "focusAnchor", null),
            v(this, "loading", void 0),
            v(this, "jumping", !1),
            v(this, "pinned", void 0),
            v(this, "dragging", !1),
            v(this, "isAtBottom", !1),
            v(this, "prevScrollTop", null),
            v(this, "anchorTimeout", null),
            v(this, "initialScrollTop", null),
            v(this, "acking", !1),
            v(this, "scrollCounter", 0),
            v(this, "offsetHeightCache", 0),
            v(this, "scrollHeightCache", 0),
            v(this, "scrollTopCache", -1),
            v(this, "_bottomAnchor", null),
            v(this, "_automaticAnchorCallbacks", []),
            v(this, "_scrollCompleteCallbacks", []),
            v(this, "updateVisibleMessagesDebounced", l().debounce(f.JR, 300)),
            v(this, "handleScroll", (e) => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    i = this.isScrolledToBottom(n);
                if (
                    (i !== this.isAtBottom &&
                        (i
                            ? ((this.isAtBottom = !0), this.props.handleScrollToBottom())
                            : ((this.isAtBottom = !1), this.props.handleScrollFromBottom())),
                    n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache)
                )
                    (this.scrollCounter = 0),
                        clearTimeout(this.anchorTimeout),
                        this.isPinned() ||
                            (null == this.automaticAnchor
                                ? this.setAutomaticAnchor(this.findAnchor())
                                : this.updateAutomaticAnchor(n.scrollTop, !0)),
                        clearTimeout(this.anchorTimeout),
                        this.fixScrollPosition(n.offsetHeight, n.scrollHeight),
                        (this.scrollTopCache = n.scrollTop);
                else {
                    if (null != e && e.target !== (null == (t = this.ref.current) ? void 0 : t.getScrollerNode()))
                        return;
                    this.scrollTopCache !== n.scrollTop &&
                        ((this.pinned = i),
                        (this.scrollCounter = Math.min(this.scrollCounter + 1, 5)),
                        this.pinned
                            ? this.cleanAutomaticAnchor()
                            : null != this.automaticAnchor
                              ? this.updateAutomaticAnchor(n.scrollTop, !0)
                              : this.setAutomaticAnchor(this.findAnchor()),
                        (this.scrollTopCache = n.scrollTop),
                        clearTimeout(this.anchorTimeout),
                        (this.anchorTimeout = setTimeout(() => {
                            (this.scrollCounter = 0), (this.anchorTimeout = null), (this.prevScrollTop = null);
                            let { scrollHeight: e, offsetHeight: t } = this.getScrollerState();
                            this.isHeightChange(t, e)
                                ? this.handleScroll()
                                : (this.cleanAutomaticAnchor(),
                                  this.isPinned() || this.setAutomaticAnchor(this.findAnchor()));
                        }, 35)));
                }
                if (
                    (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight),
                    this.updateStoreDimensionsDebounced(),
                    this.isScrollLoadingDisabled())
                )
                    return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(n);
                let r = this.isInScrollTriggerLoadingRegion(n);
                1 === r ? this.loadMore() : 2 === r ? this.loadMore(!0) : this.enableAutomaticAck(),
                    this.handleScrollSpeed(n);
            }),
            v(this, "handleResize", (e, t) => {
                let { offsetHeightCache: n, scrollHeightCache: i } = this;
                "container" === t ? (n = e.contentRect.height) : "content" === t && (i = e.contentRect.height),
                    this.isHeightChange(n, i) && this.fixScrollPosition(n, i);
            }),
            v(this, "handleMouseDown", (e) => {
                e.target === e.currentTarget && (this.dragging = !0);
            }),
            v(this, "handleMouseUp", () => {
                (this.dragging = !1), this.handleScroll();
            }),
            v(this, "loadMore", function () {
                let e,
                    t,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { messages: i } = r.props;
                if (n) {
                    let e = i.last();
                    null != e && (t = e.id);
                } else {
                    let t = i.first();
                    null != t && (e = t.id);
                }
                (r.messageFetchAnchor = r.findFetchAnchor(n)),
                    (r.loading = !0),
                    s.Z.fetchMessages({
                        channelId: r.props.channel.id,
                        before: e,
                        after: t,
                        limit: C.AQB,
                        truncate: !0,
                    });
            }),
            v(this, "updateStoreDimensionsDebounced", l().debounce(this.updateStoreDimensions, 200)),
            (this.props = e),
            (this.loading = e.messages.loadingMore),
            null != e.messages.jumpTargetId)
        )
            this.pinned = !1;
        else {
            let i = h.Z.isAtBottom(e.channel.id);
            (this.pinned = null == i || i),
                (this.initialScrollTop = i
                    ? null
                    : null != (n = null == (t = h.Z.getChannelDimensions(e.channel.id)) ? void 0 : t.scrollTop)
                      ? n
                      : null);
        }
    }
}
function j(e) {
    let {
            messages: t,
            channel: n,
            compact: r,
            hasUnreads: l,
            focusId: a,
            placeholderHeight: o,
            canLoadMore: s = !0,
            handleScrollToBottom: c,
            handleScrollFromBottom: u,
            additionalMessagePadding: p = 0,
        } = e,
        { windowId: f } = i.useContext(d.ZP),
        [h] = i.useState(
            () =>
                new E({
                    messages: t,
                    channel: n,
                    compact: r,
                    hasUnreads: l,
                    focusId: a,
                    placeholderHeight: o,
                    canLoadMore: s,
                    windowId: f,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: u,
                    additionalMessagePadding: p,
                }),
        );
    return (
        h.getSnapshotBeforeUpdate(a),
        i.useLayoutEffect(() =>
            h.mergePropsAndUpdate({
                messages: t,
                channel: n,
                compact: r,
                hasUnreads: l,
                focusId: a,
                placeholderHeight: o,
                canLoadMore: s,
                windowId: f,
                handleScrollToBottom: c,
                handleScrollFromBottom: u,
                additionalMessagePadding: p,
            }),
        ),
        i.useLayoutEffect(() => () => h.cleanup(), [h]),
        h
    );
}
