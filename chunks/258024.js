n.d(t, {
    Ay: () => _,
}),
    n(896048),
    n(638769),
    n(321073);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    a = n(621466),
    s = n(951001),
    o = n(843472),
    c = n(334738),
    u = n(775602),
    d = n(267102),
    f = n(976860),
    p = n(863922),
    h = n(72314),
    b = n(661191),
    g = n(61939),
    m = n(371741),
    A = n(420819),
    y = n(381941),
    O = n(652215);

function j(e, t, n) {
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

function v(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let { jumpTargetId: r, jumpTargetOffset: l } = e;
    if (e.has(r) || (!e.hasMoreBefore && r === b.default.castChannelIdAsMessageId(e.channelId))) {
        if (0 === l) return r;
        let t = e.getByIndex(e.indexOf(r) + l);
        return null != (n = null == t ? void 0 : t.id) ? n : r;
    }
    let i = [
            r,
            ...e.map((e) => {
                let { id: t } = e;
                return t;
            }),
        ].sort(b.default.compare),
        a = i.indexOf(r),
        s = null != (t = i[a + (Math.abs(l) > 0 ? l : 1)]) ? t : i[a - 1];
    return null != s ? s : null;
}
let x = {
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
        return null == t ? null : (0, m.Av)(t, n, e);
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
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        j(e, t, n[t]);
                    });
            }
            return e;
        })({}, e);
        let { offsetHeight: r, scrollHeight: l } = this.getScrollerState(),
            i = this.isHeightChange(r, l);
        if (
            ((this.offsetHeightCache = r),
            (this.scrollHeightCache = l),
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
            let n = v(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping()) return void (null != n ? this.scrollToMessage(n, !0) : (this.jumping = !1));
            } else {
                let r,
                    l = t.first();
                null != l &&
                    e.messages.last() !== t.last() &&
                    e.messages.first() !== t.first() &&
                    (r = b.default.extractTimestamp(l.id)),
                    this.scrollToMessage(n, !0, r);
                return;
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            (this.jumping = !0), this.scrollTo(0), this.setScrollToBottom(!0);
            return;
        }
        let a = e.messages.last(),
            s = t.last();
        if (null != a && a.state === O.cmJ.SENDING && (null == s ? void 0 : s.id) !== a.id)
            return void this.setScrollToBottom();
        let { focusId: o } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e) {
                var c;
                null == (c = this.ref.current) ||
                    c.scrollIntoViewNode({
                        node: e,
                        padding: y.mZ + this.props.additionalMessagePadding,
                        callback: this.handleScroll,
                    });
                return;
            }
        }
        i && this.fixScrollPosition(r, l);
    }
    getAnchorData(e, t, n) {
        var r;
        let l = this.getElementFromMessageId(e),
            i = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        if (!(0, a.vq)(l) || null == i) return null;
        let { offsetHeight: s } = l,
            o = (0, A.A)(l, i),
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
        return this.props.channel.isForumPost() ? y.Gt : y.k8;
    }
    findAnchor() {
        let { messages: e, hasUnreads: t, channel: n } = this.props,
            r = this.getScrollerState(),
            { scrollTop: l } = r,
            i = t && l >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0,
            a = null,
            s = (t) => {
                var r;
                return -1 === t ? b.default.castChannelIdAsMessageId(n.id) : null == (r = e._array[t]) ? void 0 : r.id;
            },
            o = -1,
            c = !1;
        for (;;) {
            let t = s(o);
            if (null == t) break;
            let n = this.getAnchorData(t, l);
            if (((this._bottomAnchor = n), c && null != n && n.offsetTop > l + i + r.offsetHeight)) break;
            if (c) {
                o++;
                continue;
            }
            null != n && (n.offsetTop >= l + i || o === e.length - 1) && ((a = n), (c = !0)), o++;
        }
        return a;
    }
    findFetchAnchor(e) {
        let { messages: t } = this.props,
            { scrollTop: n } = this.getScrollerState(),
            r = e ? -1 : 1,
            l = null,
            i = t._array.length - 1;
        for (let a = e ? i : 0; null != t._array[a]; a += r) {
            let e = t._array[a],
                r = this.getAnchorData(e.id, n);
            if (null != r) {
                l = r;
                break;
            }
        }
        return l;
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
            var r;
            this.isPinned()
                ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll)
                : this.mergeTo(n, this.handleScroll),
                null == (r = this.ref.current) ||
                    r.scrollIntoViewNode({
                        node: t,
                        padding: y.mZ + this.props.additionalMessagePadding,
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
        let r = (this.focusAnchor = null != e ? this.getAnchorData(e, t) : null);
        null != r && (r.offsetFromTop >= n || t > r.offsetTop + r.offsetHeight) && (this.focusAnchor = null);
    }
    handleFocusAnchorScroll(e, t) {
        var n;
        this.updateFocusAnchor(null == (n = this.focusAnchor) ? void 0 : n.id, e, t);
    }
    updateFetchAnchor(e, t, n) {
        var r;
        let l = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        null != this.messageFetchAnchor &&
            null != l &&
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
            r = null == (t = this.ref.current) ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == r) return;
        let l = this.getAnchorData(this.automaticAnchor.id, e);
        n && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop),
            this.setAutomaticAnchor(l);
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
        return null != (e = null == (t = this.ref.current) ? void 0 : t.getScrollerState()) ? e : x;
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache;
    }
    isInPlaceholderRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            { messages: l, placeholderHeight: i } = this.props;
        return l.hasMoreBefore && t < i && r > n ? 1 : l.hasMoreAfter && t >= r - n - i ? 2 : 0;
    }
    isInScrollTriggerLoadingRegion(e) {
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            { messages: l } = this.props;
        return l.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && r > n
            ? 1
            : l.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e)
              ? 2
              : 0;
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let { scrollTop: t, offsetHeight: n, scrollHeight: r } = e,
            {
                prevScrollTop: l,
                props: { placeholderHeight: i },
            } = this;
        if (((this.prevScrollTop = t), null == l)) return;
        let a = this.isInPlaceholderRegion(e),
            s = t - l;
        0 !== a &&
            0 !== s &&
            (1 === a && t + s <= 0
                ? (this.mergeTo(i - n), (this.prevScrollTop = i - n))
                : 2 === a && t + s >= r - n && (this.mergeTo(r - i), (this.prevScrollTop = r - i)));
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
            let n = v(e);
            if (null == n) return;
            let r = this.getElementFromMessageId(n);
            (0, a.vq)(r)
                ? this.scrollTo(
                      this.getOffsetOrientationFromNode(r, "middle", t ? this.newMessageBarBuffer() : y.mZ),
                      !0,
                  )
                : this.scrollToNewMessages(!0, "middle");
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0);
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            r = arguments.length > 2 ? arguments[2] : void 0,
            l = null == (e = this.getDocument()) ? void 0 : e.getElementById(y.q4),
            i = () => {
                (this.jumping = !1), this.setAutomaticAnchor(this.findAnchor()), null != r && r(), this.handleScroll();
            };
        (this.pinned = !1),
            (this.jumping = t),
            null != l
                ? this.scrollTo(this.getOffsetOrientationFromNode(l, n, this.newMessageBarBuffer()), t, i)
                : this.scrollTo(this.getOffsetToPreventLoading("top"), t, i);
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = null == (n = this.ref.current) ? void 0 : n.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            a = (0, A.A)(e, l);
        return "middle" === t ? Math.min(a - 0.5 * i.offsetHeight + 0.5 * e.offsetHeight + -8, a - r) : a - r;
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let { initialScrollTop: e } = this;
        this.initialScrollTop = void 0;
        let t = v(this.props.messages);
        null != t
            ? this.scrollToMessage(t, !1)
            : this.props.hasUnreads &&
                this.props.channel.type !== O.rbe.GUILD_VOICE &&
                this.props.channel.type !== O.rbe.GUILD_STAGE_VOICE
              ? ((0, g.x)(this.props.channel, this.props.messages), this.scrollToNewMessages())
              : null != e
                ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll)
                : this.setScrollToBottom();
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        null == (t = this.ref.current) ||
            t.scrollTo({
                to: e,
                animate: !u.A.useReducedMotion && n,
                callback: r,
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
            var r;
            o.A.jumpToPresent(n.id, O.EMb), (0, f.uh)(null != (r = n.getGuildId()) ? r : O.ME, n.id);
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
                { scrollTop: r, scrollHeight: l, offsetHeight: i } = this.getScrollerState();
            s.A.updateChannelDimensions(t.id, r - n, l - n, i, e);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.ref.current) return;
        if (e === this.props.channel.id) return void this.scrollTo(0);
        let r = this.getElementFromMessageId(e);
        this.isJumping() ||
            !t ||
            null == n ||
            u.A.useReducedMotion ||
            (b.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)),
            (this.pinned = !1),
            (this.jumping = !0);
        let l = () => {
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
                      this.props.hasUnreads ? this.newMessageBarBuffer() : y.mZ,
                  ),
                  t,
                  l,
              )
            : this.scrollToNewMessages(t, "middle", l);
    }
    getOffsetToTriggerLoading(e, t) {
        let { scrollHeight: n, offsetHeight: r } = t,
            { messages: l, hasUnreads: i, placeholderHeight: a } = this.props;
        if ("top" === e)
            if (!l.hasMoreBefore) return 0;
            else return i ? a - y.N0 - 2 : a + 500;
        return l.hasMoreAfter ? n - r - a - 500 : n - r;
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
            let { scrollTop: t, offsetHeight: n, scrollHeight: r } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, r), this.updateAutomaticAnchor(t);
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
            l = this;
        if (
            (j(this, "props", void 0),
            j(this, "ref", r.createRef()),
            j(this, "automaticAnchor", null),
            j(this, "messageFetchAnchor", null),
            j(this, "focusAnchor", null),
            j(this, "loading", void 0),
            j(this, "jumping", !1),
            j(this, "pinned", void 0),
            j(this, "dragging", !1),
            j(this, "isAtBottom", !1),
            j(this, "prevScrollTop", null),
            j(this, "anchorTimeout", null),
            j(this, "initialScrollTop", null),
            j(this, "acking", !1),
            j(this, "scrollCounter", 0),
            j(this, "offsetHeightCache", 0),
            j(this, "scrollHeightCache", 0),
            j(this, "scrollTopCache", -1),
            j(this, "_bottomAnchor", null),
            j(this, "_automaticAnchorCallbacks", []),
            j(this, "_scrollCompleteCallbacks", []),
            j(this, "updateVisibleMessagesDebounced", i().debounce(p.s_, 300)),
            j(this, "handleScroll", (e) => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    r = this.isScrolledToBottom(n);
                if (
                    (r !== this.isAtBottom &&
                        (r
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
                        ((this.pinned = r),
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
                let l = this.isInScrollTriggerLoadingRegion(n);
                1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(),
                    this.handleScrollSpeed(n);
            }),
            j(this, "handleResize", (e, t) => {
                let { offsetHeightCache: n, scrollHeightCache: r } = this;
                "container" === t ? (n = e.contentRect.height) : "content" === t && (r = e.contentRect.height),
                    this.isHeightChange(n, r) && this.fixScrollPosition(n, r);
            }),
            j(this, "handleMouseDown", (e) => {
                e.target === e.currentTarget && (this.dragging = !0);
            }),
            j(this, "handleMouseUp", () => {
                (this.dragging = !1), this.handleScroll();
            }),
            j(this, "loadMore", function () {
                let e,
                    t,
                    n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { messages: r } = l.props;
                if (n) {
                    let e = r.last();
                    null != e && (t = e.id);
                } else {
                    let t = r.first();
                    null != t && (e = t.id);
                }
                (l.messageFetchAnchor = l.findFetchAnchor(n)),
                    (l.loading = !0),
                    o.A.fetchMessages({
                        channelId: l.props.channel.id,
                        before: e,
                        after: t,
                        limit: O.EMb,
                        truncate: !0,
                    });
            }),
            j(this, "updateStoreDimensionsDebounced", i().debounce(this.updateStoreDimensions, 200)),
            (this.props = e),
            (this.loading = e.messages.loadingMore),
            null != e.messages.jumpTargetId)
        )
            this.pinned = !1;
        else {
            const r = h.A.isAtBottom(e.channel.id);
            (this.pinned = null == r || r),
                (this.initialScrollTop = r
                    ? null
                    : null != (t = null == (n = h.A.getChannelDimensions(e.channel.id)) ? void 0 : n.scrollTop)
                      ? t
                      : null);
        }
    }
}

function _(e) {
    let {
            messages: t,
            channel: n,
            compact: l,
            hasUnreads: i,
            focusId: a,
            placeholderHeight: s,
            canLoadMore: o = !0,
            handleScrollToBottom: c,
            handleScrollFromBottom: u,
            additionalMessagePadding: f = 0,
        } = e,
        { windowId: p } = r.useContext(d.Ay),
        [h] = r.useState(
            () =>
                new E({
                    messages: t,
                    channel: n,
                    compact: l,
                    hasUnreads: i,
                    focusId: a,
                    placeholderHeight: s,
                    canLoadMore: o,
                    windowId: p,
                    handleScrollToBottom: c,
                    handleScrollFromBottom: u,
                    additionalMessagePadding: f,
                }),
        );
    return (
        h.getSnapshotBeforeUpdate(a),
        r.useLayoutEffect(() =>
            h.mergePropsAndUpdate({
                messages: t,
                channel: n,
                compact: l,
                hasUnreads: i,
                focusId: a,
                placeholderHeight: s,
                canLoadMore: o,
                windowId: p,
                handleScrollToBottom: c,
                handleScrollFromBottom: u,
                additionalMessagePadding: f,
            }),
        ),
        r.useLayoutEffect(() => () => h.cleanup(), [h]),
        h
    );
}
