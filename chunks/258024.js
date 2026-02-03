n.d(t, {
    Ay: () => S,
}),
    n(896048),
    n(638769),
    n(321073);
var l = n(64700),
    r = n(735438),
    i = n.n(r),
    a = n(621466),
    s = n(951001),
    o = n(843472),
    c = n(334738),
    u = n(775602),
    d = n(267102),
    h = n(976860),
    p = n(863922),
    f = n(72314),
    m = n(661191),
    g = n(61939),
    A = n(371741),
    b = n(420819),
    _ = n(381941),
    y = n(652215);

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

function E(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: l, jumpTargetOffset: r } = e;
    if (e.has(l) || (!e.hasMoreBefore && l === m.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === r) return l;
        let t = e.getByIndex(e.indexOf(l) + r);
        return null != (n = null == t ? void 0 : t.id) ? n : l;
    }
    let i = [
            l,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(m.default.compare),
        a = i.indexOf(l),
        s = null != (t = i[a + (Math.abs(r) > 0 ? r : 1)]) ? t : i[a - 1];
    return null != s ? s : null;
}
let O = {
    scrollTop: 0,
    scrollHeight: 0,
    offsetHeight: 0,
};
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
        return null == t ? null : (0, A.Av)(t, n, e);
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
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    l.forEach(function (t) {
                        v(e, t, n[t]);
                    });
            }
            return e;
        })({}, e);
        let { offsetHeight: l, scrollHeight: r } = this.getScrollerState(),
            i = this.isHeightChange(l, r);
        if (
            ((this.offsetHeightCache = l),
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
            let n = E(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping())
                    return void (null != n
                        ? this.scrollToMessage({
                              jumpTargetId: n,
                              animate: !0,
                          })
                        : (this.jumping = !1));
            } else {
                let l,
                    r = t.first();
                null != r &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (l = m.default.extractTimestamp(r.id)),
                    this.scrollToMessage({
                        jumpTargetId: n,
                        animate: !0,
                        fromTimestamp: l,
                    });
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            s = t.last();
        if (null != a && a.state === y.cmJ.SENDING && (null == s ? void 0 : s.id) !== a.id)
            return void this.setScrollToBottom();
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e) {
                var c;
                null == (c = this.ref.current) ||
                    c.scrollIntoViewNode({
                        node: e,
                        padding: _.mZ + this.props.additionalMessagePadding,
                        callback: this.handleScroll,
                    });
                return;
            }
        }
        i && this.fixScrollPosition(l, r);
    }
    getAnchorData(e, t, n) {
        var l;
        let r = this.getElementFromMessageId(e),
            i = null == (l = this.ref.current) ? void 0 : l.getScrollerNode();
        if (!(0, a.vq)(r) || null == i) return null;
        let { offsetHeight: s } = r,
            o = (0, b.A)(r, i),
            c = o - t;
        return (
            null != n && (c = Math.max(-s, Math.min(n, c))),
            {
                id: e,
                offsetFromTop: c,
                offsetTop: o,
                offsetHeight: s,
                clamped: null != c,
            }
        );
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null);
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? _.Gt : _.k8;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            l = this.getScrollerState(),
            { scrollTop: r } = l,
            i = t && r >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            s = (t) => {
                var l;
                return -1 === t ? m.default.castChannelIdAsMessageId(n.id) : null == (l = e._array[t]) ? void 0 : l.id;
            },
            o = -1,
            c = !1;
        for (;;) {
            let t = s(o);
            if (null == t) break;
            let n = this.getAnchorData(t, r);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > r + i + l.offsetHeight)) break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= r + i || o === e.length - 1) && ((a = n), (c = !0)), o++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            l = e ? -1 : 1,
            r = null,
            i = t._array.length - 1;
        for (let a = e ? i : 0; null != t._array[a]; a += l) {
            let e = t._array[a],
                l = this.getAnchorData(e.id, n);
            if (null != l) {
                r = l;
                break;
            }
        }
        return r;
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, a.vq)(t)) continue;
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
            var l;
            this.isPinned()
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.mergeTo(n, this.handleScroll),
                null == (l = this.ref.current) ||
                    l.scrollIntoViewNode({
                        node: t,
                        padding: _.mZ + this.props.additionalMessagePadding,
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
        let l = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != l && (l.offsetFromTop >= n || t > l.offsetTop + l.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        var n;
        this.updateFocusAnchor(null == (n = this.focusAnchor) ? void 0 : n.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        var l;
        let r = null == (l = this.ref.current) ? void 0 : l.getScrollerNode();
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
            l = null == (t = this.ref.current) ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == l) return;
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
        return null != (e = null == (t = this.ref.current) ? void 0 : t.getScrollerState()) ? e : O;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: r, placeholderHeight: i } = this.props;
        return r.hasMoreBefore && t < i && l > n ? 1 : r.hasMoreAfter && t >= l - n - i ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            { messages: r } = this.props;
        return r.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && l > n
            ? 1
            : r.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: l } = e,
            {
                prevScrollTop: r,
                props: { placeholderHeight: i },
            } = this;
        if (((this.prevScrollTop = t), null == r)) return;
        let a = this.isInPlaceholderRegion(e),
            s = t - r;
        0 !== a &&
            0 !== s &&
            (1 === a && t + s <= 0
                ? (this.mergeTo(i - n), (this.prevScrollTop = i - n))
                : 2 === a && t + s >= l - n && (this.mergeTo(l - i), (this.prevScrollTop = l - i)));
    }
    enableAutomaticAck() {
        this.isInitialized() &&
            !this.acking &&
            ((this.acking = !0),
            this.updateStoreDimensions(() => {
                (0, c._9)(this.props.channel.id, this.props.windowId);
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
            let n = E(e);
            if (null == n) return;
            let l = this.getElementFromMessageId(n);
            (0, a.vq)(l)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : _.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            l = arguments.length > 2 ? arguments[2] : void 0,
            r = null == (e = this.getDocument()) ? void 0 : e.getElementById(_.q4),
            i = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != l && l(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = t),
            null != r
                ? this.scrollTo(this.getOffsetOrientationFromNode(r, n, this.newMessageBarBuffer()), t, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), t, i);
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = null == (n = this.ref.current) ? void 0 : n.getScrollerNode();
        if (null == r) return 0;
        let i = this.getScrollerState(),
            a = (0, b.A)(e, r);
        return "middle" === t ? Math.min(a - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, a - l) : a - l;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = E(this.props.messages);
        if (null != t)
            this.scrollToMessage({
                jumpTargetId: t,
                animate: !1,
            });
        else if (
            this.props.hasUnreads &&
            this.props.channel.type !== y.rbe.GUILD_VOICE &&
            this.props.channel.type !== y.rbe.GUILD_STAGE_VOICE
        ) {
            let e = (0, g.i)(this.props.channel, this.props.messages);
            null != e
                ? this.scrollToMessage({
                      jumpTargetId: e,
                      animate: !1,
                  })
                : this.scrollToNewMessages();
        } else
            null != e
                ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = arguments.length > 2 ? arguments[2] : void 0;
        null == (t = this.ref.current) ||
            t.scrollTo({
                to: e,
                animate: !u.A.useReducedMotion && n,
                callback: l,
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
            var l;
            o.A.jumpToPresent(n.id, y.EMb), (0, h.uh)(null != (l = n.getGuildId()) ? l : y.ME, n.id);
        } else
            this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
                (this.jumping = !1), this.handleScroll();
            });
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let { channel: t } = this.props;
        if (this.isPinned()) s.A.updateChannelDimensions(t.id, 1, 1, 0, e);
        else {
            let { placeholderHeight: n } = this.props,
                { scrollTop: l, scrollHeight: r, offsetHeight: i } = this.getScrollerState();
            s.A.updateChannelDimensions(t.id, l - n, r - n, i, e);
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == (e = this.ref.current) ||
            e.scrollPageUp({
                animate: t,
            });
    }
    scrollPageDown() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == (e = this.ref.current) ||
            e.scrollPageDown({
                animate: t,
            });
    }
    scrollToMessage(e) {
        let { jumpTargetId: t, animate: n = !1, fromTimestamp: l } = e;
        if (null == this.ref.current) return;
        if (t === this.props.channel.id) return void this.scrollTo(0);
        let r = this.getElementFromMessageId(t);
        this.isJumping() ||
            !n ||
            null == l ||
            u.A.useReducedMotion ||
            (m.default.extractTimestamp(t) > l ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let i = () => {
            (this.jumping = !1),
                (0, a.vq)(r) &&
                    ((r.tabIndex = -1),
                    r.focus({
                        preventScroll: !0,
                    })),
                (this.scrollCounter = 0),
                this.handleScroll(),
                this._scrollCompleteCallbacks.forEach((e) => e());
        };
        (0, a.vq)(r)
            ? this.scrollTo(
                  this.getOffsetOrientationFromNode(
                      r,
                      "middle",
                      this.props.hasUnreads ? this.newMessageBarBuffer() : _.mZ,
                  ),
                  n,
                  i,
              )
            : this.scrollToNewMessages(n, "middle", i);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: l } = t,
            { messages: r, hasUnreads: i, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!r.hasMoreBefore) return 0;
            else return i ? a - _.N0 - 2 : a + 500;
        return r.hasMoreAfter ? n - l - a - 500 : n - l;
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
            let { scrollTop: t, offsetHeight: n, scrollHeight: l } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t);
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e),
            (this._automaticAnchorCallbacks = i().uniq(this._automaticAnchorCallbacks)),
            !0 === t && this.setAutomaticAnchor(this.findAnchor());
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = i().without(this._automaticAnchorCallbacks, e);
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e),
            (this._scrollCompleteCallbacks = i().uniq(this._scrollCompleteCallbacks));
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = i().without(this._scrollCompleteCallbacks, e);
    }
    cleanup() {
        (this.acking = !1),
            this.updateStoreDimensionsDebounced.cancel(),
            this._automaticAnchorCallbacks.forEach((e) => this.removeAutomaticAnchorCallback(e)),
            (0, c.Z5)(this.props.channel.id, this.props.windowId);
    }
    constructor(e) {
        var t,
            n,
            r = this;
        if (
            (v(this, "props", void 0),
            v(this, "ref", l.createRef()),
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
            v(this, "updateVisibleMessagesDebounced", i().debounce(p.s_, 300)),
            v(this, "handleScroll", (e) => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    l = this.isScrolledToBottom(n);
                if (
                    (l !== this.isAtBottom &&
                        (l
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
                        ((this.pinned = l),
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
                let { offsetHeightCache: n, scrollHeightCache: l } = this;
                "container" === t ? (n = e.contentRect.height) : "content" === t && (l = e.contentRect.height),
                    this.isHeightChange(n, l) && this.fixScrollPosition(n, l);
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
                    { messages: l } = r.props;
                if (n) {
                    let e = l.last();
                    null != e && (t = e.id);
                } else {
                    let t = l.first();
                    null != t && (e = t.id);
                }
                (r.messageFetchAnchor = r.findFetchAnchor(n)),
                    (r.loading = !0),
                    o.A.fetchMessages({
                        channelId: r.props.channel.id,
                        before: e,
                        after: t,
                        limit: y.EMb,
                        truncate: !0,
                    });
            }),
            v(this, "updateStoreDimensionsDebounced", i().debounce(this.updateStoreDimensions, 200)),
            (this.props = e),
            (this.loading = e.messages.loadingMore),
            null != e.messages.jumpTargetId)
        )
            this.pinned = !1;
        else {
            const l = f.A.isAtBottom(e.channel.id);
            (this.pinned = null == l || l),
                (this.initialScrollTop = l
                    ? null
                    : null != (t = null == (n = f.A.getChannelDimensions(e.channel.id)) ? void 0 : n.scrollTop)
                      ? t
                      : null);
        }
    }
}

function S(e) {
    let {
            messages: t,
            channel: n,
            compact: r,
            hasUnreads: i,
            focusId: a,
            placeholderHeight: s,
            canLoadMore: o = !0,
            handleScrollToBottom: c,
            handleScrollFromBottom: u,
            additionalMessagePadding: h = 0,
        } = e,
        { windowId: p } = l.useContext(d.Ay),
        [f] = l.useState(
            () =>
                new C({
                    messages: t,
                    channel: n,
                    compact: r,
                    hasUnreads: i,
                    focusId: a,
                    placeholderHeight: s,
                    canLoadMore: o,
                    windowId: p,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: u,
                    additionalMessagePadding: h,
                }),
        );
    return (
        f.getSnapshotBeforeUpdate(a),
        l.useLayoutEffect(() =>
            f.mergePropsAndUpdate({
                messages: t,
                channel: n,
                compact: r,
                hasUnreads: i,
                focusId: a,
                placeholderHeight: s,
                canLoadMore: o,
                windowId: p,
                handleScrollToBottom: c,
                handleScrollFromBottom: u,
                additionalMessagePadding: h,
            }),
        ),
        l.useLayoutEffect(() => () => f.cleanup(), [f]),
        f
    );
}
