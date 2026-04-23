"use strict";
n.d(t, { $: () => N, o: () => S });
var r = n(627968),
    i = n(64700),
    s = n(985623),
    a = n.n(s),
    o = n(296489),
    l = n.n(o),
    u = n(340287),
    c = n(621466),
    d = n(707554),
    _ = n(365912),
    f = n(623646),
    p = n(451988),
    h = n(192308),
    E = n(750506),
    m = n(267102),
    g = n(712687),
    A = n(728458),
    I = n(292036),
    T = n(652215);
let S = Symbol("POPOUT_PREVENT_CLOSE"),
    y = new Set(["Spacebar", " ", "Enter"]);
class N extends i.Component {
    static defaultProps = {
        autoInvert: !1,
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        loadingComponent: (0, r.jsx)(I.s, {}),
        closeOnClickOutside: !0,
    };
    domElementRef = i.createRef();
    layerRef = i.createRef();
    popoutRef = i.createRef();
    resizeObserver;
    popoutId = `popout_${l()()}`;
    loadingTimeout = new p.Ep();
    validClickTimeout = new p.Ep();
    isValidClickStart = !1;
    static contextType = m.Ay;
    state = {
        renderedPosition: this.props.position,
        shouldShowPopout: !1,
        shouldShowLoadingState: !1,
        isLoading: !1,
        resizeKey: 0,
    };
    shouldShowPopout(e, t) {
        return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout;
    }
    componentDidMount() {
        this.shouldShowPopout(this.props, this.state) && this.setupShowPopout();
    }
    componentDidUpdate(e, t) {
        e.shouldShow, this.props.shouldShow;
        let n = this.shouldShowPopout(this.props, this.state);
        if (
            ((this.shouldShowPopout(e, t) !== n ||
                t.isLoading !== this.state.isLoading ||
                e.ignoreModalClicks !== this.props.ignoreModalClicks) &&
                (n ? this.setupShowPopout() : this.unsubscribe()),
            this.props.scrollBehavior !== e.scrollBehavior)
        ) {
            let e = this.getDomElement();
            if (null == e) return;
            e.ownerDocument?.removeEventListener("scroll", this.handleScroll, !0),
                e.ownerDocument?.removeEventListener("scroll", this.handleStickyScroll, !0),
                "close" === this.props.scrollBehavior
                    ? e.ownerDocument?.addEventListener("scroll", this.handleScroll, !0)
                    : "sticky" === this.props.scrollBehavior &&
                      e.ownerDocument?.addEventListener("scroll", this.handleStickyScroll, !0);
        }
    }
    getDomElement() {
        let e = this.props.targetElementRef?.current;
        if (!(0, c.vq)(e)) {
            let e = Error("Popout cannot find DOM node");
            return console.error(e), A.A.captureException(e), null;
        }
        return e;
    }
    get closeAction() {
        return this.props.ignoreModalClicks ? T.jej.POPOUT_CLOSE_AFTER_MODALS : T.jej.POPOUT_CLOSE;
    }
    setupShowPopout() {
        let e = this.getDomElement();
        null != e &&
            (e.ownerDocument?.addEventListener("mousedown", this.handleDocumentMouseDown, !0),
            e.ownerDocument?.addEventListener("mouseup", this.handleDocumentMouseUp, !0),
            "close" === this.props.scrollBehavior
                ? e.ownerDocument?.addEventListener("scroll", this.handleScroll, !0)
                : "sticky" === this.props.scrollBehavior &&
                  e.ownerDocument?.addEventListener("scroll", this.handleStickyScroll, !0),
            this.context.windowDispatch.subscribe(this.closeAction, this.handleEscapeClose),
            (this.domElementRef.current = e),
            (this.isValidClickStart = !1),
            this.forceUpdate());
    }
    unsubscribe() {
        let e = this.domElementRef.current;
        null != e &&
            (e.ownerDocument?.removeEventListener("mousedown", this.handleDocumentMouseDown, !0),
            e.ownerDocument?.removeEventListener("mouseup", this.handleDocumentMouseUp, !0),
            e.ownerDocument?.removeEventListener("scroll", this.handleScroll, !0),
            e.ownerDocument?.removeEventListener("scroll", this.handleStickyScroll, !0)),
            this.context.windowDispatch.unsubscribe(T.jej.POPOUT_CLOSE, this.handleEscapeClose),
            this.context.windowDispatch.unsubscribe(T.jej.POPOUT_CLOSE_AFTER_MODALS, this.handleEscapeClose),
            this.resizeObserver?.disconnect();
    }
    componentWillUnmount() {
        this.unsubscribe(),
            (this.domElementRef.current = null),
            this.loadingTimeout.stop(),
            this.validClickTimeout.stop();
    }
    render() {
        let { children: e, useMouseEnter: t } = this.props,
            n = this.shouldShowPopout(this.props, this.state);
        return (0, r.jsxs)(i.Fragment, {
            children: [
                e(
                    {
                        onMouseDown: this.handlePreload,
                        ...(t ? { onMouseEnter: this.handleMouseEnter } : {}),
                        onKeyDown: this.handleKeyboardPreload,
                        onClick: this.handleClick,
                        "aria-controls": n ? this.popoutId : void 0,
                        "aria-expanded": n,
                    },
                    { isShown: n, position: this.state.renderedPosition },
                ),
                (0, r.jsx)(d.F, { forceLevel: 2, children: this.renderLayer() }),
            ],
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let {
                position: e,
                align: t,
                nudgeAlignIntoViewport: n,
                useRawTargetDimensions: i,
                spacing: s,
                offset: a,
                autoInvert: o,
                fixed: l,
                positionKey: u,
                disablePointerEvents: c,
                layerContext: d,
                clickTrap: p = !1,
            } = this.props,
            { resizeKey: h, isLoading: m, shouldShowLoadingState: g } = this.state;
        return m && !g
            ? null
            : (0, r.jsx)(_.Wd, {
                  layerContext: d ?? E.uY,
                  children: (0, r.jsx)(f.Q, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: this.domElementRef,
                      position: e,
                      align: t,
                      nudgeAlignIntoViewport: n,
                      useRawTargetDimensions: i,
                      spacing: s,
                      offset: a,
                      autoInvert: o,
                      fixed: l,
                      positionKey: u ?? String(h),
                      disablePointerEvents: c,
                      onPositionChange: this.handlePopoutPositionChange,
                      clickTrap: p,
                      children: this.renderPopout,
                  }),
              });
    }
    handlePopoutShow = () => {
        this.context.windowDispatch.dispatch(T.jej.POPOUT_SHOW, this.props.popoutKey);
    };
    handlePopoutHide = () => {
        this.context.windowDispatch.dispatch(T.jej.POPOUT_HIDE, this.props.popoutKey);
    };
    handleSetPopoutRef = (e) => {
        let t = e?.ownerDocument.defaultView;
        null != e &&
            null != t &&
            ((this.popoutRef.current = e),
            this.resizeObserver?.disconnect(),
            (this.resizeObserver = new t.ResizeObserver(() => {
                u.flushSync(() => {
                    this.setState({ resizeKey: this.state.resizeKey + 1 });
                });
            })),
            this.resizeObserver.observe(e));
    };
    renderPopout = (e, t) => {
        let { renderPopout: n } = this.props;
        return this.state.isLoading
            ? this.props.loadingComponent
            : n({ ...e, updatePosition: t, closePopout: this.close, setPopoutRef: this.handleSetPopoutRef });
    };
    toggleShow(e) {
        this.state.shouldShowPopout !== e && this.setState({ shouldShowPopout: e });
    }
    close = (e, t) => {
        let { onRequestClose: n, shouldShow: r } = this.props;
        n?.(e, t) === S || (null == r && this.toggleShow(!1));
    };
    handleClick = (e) => {
        let { onShiftClick: t, shouldShow: n, onRequestOpen: r, onRequestClose: i } = this.props;
        if (e?.shiftKey && null != t) return void t(e);
        let s = null != n;
        (s ? n : this.state.shouldShowPopout) ? i?.(e?.nativeEvent, "user:explicit") : r?.(),
            s ||
                this.setState((e) => {
                    let { shouldShowPopout: t } = e;
                    return { shouldShowPopout: !t };
                });
    };
    handleMouseEnter = () => {
        let { onRequestOpen: e } = this.props;
        e?.(), this.setState({ shouldShowPopout: !0 });
    };
    handlePreload = async () => {
        let { preload: e } = this.props;
        if (null != e) {
            this.setState({ isLoading: !0 }),
                this.loadingTimeout.start(250, () => this.setState({ shouldShowLoadingState: !0 }), !1);
            try {
                await e();
            } finally {
                this.setState({ isLoading: !1 });
            }
        }
    };
    handleKeyboardPreload = (e) => {
        y.has(e.key) && this.handlePreload();
    };
    handleDocumentMouseDown = (e) => {
        let { ignoreModalClicks: t, closeOnClickOutside: n } = this.props;
        if (!1 === n) return;
        let r = e.target,
            i = this.domElementRef.current;
        if (null != i) {
            if ((0, f.H)(i, r) || g.A.isOpen() || (t && (0, h.hasAnyModalOpen)())) return;
            this.isValidClickStart = !0;
        }
    };
    handleDocumentMouseUp = (e) => {
        this.isValidClickStart && ((this.isValidClickStart = !1), this.close(e, "system:click_outside"));
    };
    handlePopoutPositionChange = (e) => {
        this.setState({ renderedPosition: e });
    };
    handleScroll = (e) => {
        let t = e.target;
        t?.contains(this.domElementRef.current) && this.close(void 0, "system:scroll");
    };
    handleEscapeClose = (e) => {
        this.close(e, "user:escape");
    };
    handleStickyScroll = a()(() => {
        requestAnimationFrame(() => {
            let e = this.popoutRef.current;
            null == e ||
                (this.shouldShowPopout(this.props, this.state) &&
                    (v(e) || this.close(void 0, "system:viewport_exit"), this.layerRef.current?.updatePosition()));
        });
    }, 1e3 / 60);
}
let v = (e) => {
    let t = e.getBoundingClientRect(),
        n = e.ownerDocument?.defaultView?.innerHeight ?? 0,
        r = e.ownerDocument?.defaultView?.innerWidth ?? 0;
    return t.top < n && t.bottom > 0 && t.left < r && t.right > 0;
};
