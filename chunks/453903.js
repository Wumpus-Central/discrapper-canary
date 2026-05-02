"use strict";
n.d(t, { $: () => y, o: () => S });
var i = n(627968),
    r = n(64700),
    s = n(985623),
    a = n.n(s),
    o = n(296489),
    l = n.n(o),
    u = n(340287),
    c = n(621466),
    d = n(707554),
    _ = n(83379),
    f = n(623646),
    h = n(451988),
    p = n(192308),
    E = n(750506),
    m = n(267102),
    g = n(712687),
    A = n(38405),
    I = n(292036),
    T = n(652215);
let S = Symbol("POPOUT_PREVENT_CLOSE"),
    N = new Set(["Spacebar", " ", "Enter"]);
class y extends r.Component {
    static defaultProps = {
        autoInvert: !1,
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        loadingComponent: (0, i.jsx)(I.s, {}),
        closeOnClickOutside: !0,
    };
    domElementRef = r.createRef();
    layerRef = r.createRef();
    popoutRef = r.createRef();
    resizeObserver;
    popoutId = `popout_${l()()}`;
    loadingTimeout = new h.Ep();
    validClickTimeout = new h.Ep();
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
        return (0, i.jsxs)(r.Fragment, {
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
                (0, i.jsx)(d.F, { forceLevel: 2, children: this.renderLayer() }),
            ],
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let {
                position: e,
                align: t,
                nudgeAlignIntoViewport: n,
                avoidancePadding: r,
                useRawTargetDimensions: s,
                spacing: a,
                offset: o,
                autoInvert: l,
                fixed: u,
                positionKey: c,
                disablePointerEvents: d,
                layerContext: h,
                clickTrap: p = !1,
            } = this.props,
            { resizeKey: m, isLoading: g, shouldShowLoadingState: A } = this.state;
        return g && !A
            ? null
            : (0, i.jsx)(_.Wd, {
                  layerContext: h ?? E.uY,
                  children: (0, i.jsx)(f.Q, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: this.domElementRef,
                      position: e,
                      align: t,
                      nudgeAlignIntoViewport: n,
                      avoidancePadding: r,
                      useRawTargetDimensions: s,
                      spacing: a,
                      offset: o,
                      autoInvert: l,
                      fixed: u,
                      positionKey: c ?? String(m),
                      disablePointerEvents: d,
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
        let { onRequestClose: n, shouldShow: i } = this.props;
        n?.(e, t) === S || (null == i && this.toggleShow(!1));
    };
    handleClick = (e) => {
        let { onShiftClick: t, shouldShow: n, onRequestOpen: i, onRequestClose: r } = this.props;
        if (e?.shiftKey && null != t) return void t(e);
        let s = null != n;
        (s ? n : this.state.shouldShowPopout) ? r?.(e?.nativeEvent, "user:explicit") : i?.(),
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
        N.has(e.key) && this.handlePreload();
    };
    handleDocumentMouseDown = (e) => {
        let { ignoreModalClicks: t, closeOnClickOutside: n } = this.props;
        if (!1 === n) return;
        let i = e.target,
            r = this.domElementRef.current;
        if (null != r) {
            if ((0, f.H)(r, i) || g.A.isOpen() || (t && (0, p.hasAnyModalOpen)())) return;
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
                    (C(e) || this.close(void 0, "system:viewport_exit"), this.layerRef.current?.updatePosition()));
        });
    }, 1e3 / 60);
}
let C = (e) => {
    let t = e.getBoundingClientRect(),
        n = e.ownerDocument?.defaultView?.innerHeight ?? 0,
        i = e.ownerDocument?.defaultView?.innerWidth ?? 0;
    return t.top < n && t.bottom > 0 && t.left < i && t.right > 0;
};
