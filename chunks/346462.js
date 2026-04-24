n.d(t, { A: () => ev, k: () => eI });
var i,
    l = n(627968),
    a = n(64700),
    r = n(936504),
    s = n(821609),
    o = n(17928),
    c = n(800342),
    d = n(820284),
    u = n(189081),
    _ = n(67480),
    m = n(674378),
    h = n(598429),
    p = n(979604);
function g(e) {
    let {
            application: t,
            fullWidth: n = !1,
            size: i = "md",
            playButtonVariant: a,
            disabledVariant: r,
            hideNotLaunchable: s,
            tooltipPosition: c,
            onClick: d,
            className: g,
            source: f,
            hover: x,
            innerClassName: A,
        } = e,
        C = {
            fullWidth: n,
            size: i,
            disabledVariant: r,
            tooltipPosition: c,
            onClick: d,
            className: g,
            hover: x,
            innerClassName: A,
        },
        v = (0, o.bG)([u.A], () => u.A.getActiveLibraryApplication(t.id)),
        I = null != v ? v.sku.id : null,
        E = null != I ? I : t.primarySkuId,
        b = (0, o.bG)([_.A], () => null != E && !_.A.didFetchingSkuFail(E));
    return null != v && (0, m.XZ)(v)
        ? (0, l.jsx)(p.A, { ...C, playButtonVariant: a, libraryApplication: v, source: f })
        : b
          ? (0, l.jsx)("div", { children: "deprecated!" })
          : (0, l.jsx)(h.A, { ...C, variant: a, hideNotLaunchable: s, applicationId: t.id });
}
var f = n(503698),
    x = n.n(f),
    A = n(657044),
    C = n(403581),
    v = n(580630),
    I = n(985018);
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e.available) return I.intl.string(I.t.RWouSQ);
    if (e.premium && !n) return I.intl.string(I.t["QGUSz/"]);
    let i = e.getPrice(null, t);
    if (null != i)
        if (i.amount > 0) return (0, v.$g)(i.amount, i.currency);
        else return I.intl.string(I.t.QQsaCc);
    return I.intl.string(I.t.RWouSQ);
}
var b = n(257727),
    y =
        (((i = y || {})[(i.DIRECTORY_HERO = 1)] = "DIRECTORY_HERO"),
        (i[(i.DIRECTORY_TILE = 2)] = "DIRECTORY_TILE"),
        (i[(i.DIRECTORY_SEARCH = 3)] = "DIRECTORY_SEARCH"),
        (i[(i.LISTING = 4)] = "LISTING"),
        (i[(i.EMBED = 5)] = "EMBED"),
        i);
let T = (e) => {
        let { className: t } = e;
        return (0, l.jsxs)("div", {
            className: x()(b.nM, t),
            children: [
                (0, l.jsx)(A._, { size: "md", color: "currentColor", className: b.Kk }),
                I.intl.string(I.t["7eicAO"]),
            ],
        });
    },
    j = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)("div", {
            className: x()(b.nM, n),
            children: [(0, l.jsx)(C.t, { size: "md", color: "currentColor", className: b.Kk }), E(t)],
        });
    },
    N = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: x()(b.EQ, n), children: t.getDisplaySalePercentage() });
    },
    S = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: x()(b.I8, n), children: E(t, !1) });
    },
    k = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsx)("div", { className: n, children: E(t) });
    },
    L = (e) => {
        let { sku: t, className: n } = e;
        return (0, l.jsxs)("div", {
            className: x()(b.nM, n),
            children: [(0, l.jsx)(N, { sku: t }), (0, l.jsx)(S, { sku: t }), (0, l.jsx)(k, { sku: t })],
        });
    },
    R = (e) => {
        let { className: t } = e;
        return (0, l.jsx)("div", { className: t, children: I.intl.string(I.t.QQsaCc) });
    };
class w extends a.PureComponent {
    static Types = y;
    getState() {
        let { inLibrary: e, sku: t, hasEntitlementBranch: n } = this.props;
        if (n) return 5;
        if (e) return 1;
        if (!t.available) return 4;
        if (t.premium) return 3;
        if (t.isOnSale) return 2;
        else if (null != t.getPrice()) return 4;
        return null;
    }
    renderGeneric(e, t) {
        let { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(R, { className: x()(t, n) });
            case 1:
                return (0, l.jsx)(T, { className: x()(t, n) });
            case 3:
                return (0, l.jsx)(j, { sku: i, className: x()(t, n) });
            case 2:
                return (0, l.jsx)(L, { sku: i, className: x()(t, n) });
            default:
                return (0, l.jsx)(k, { className: x()(t, n), sku: i });
        }
    }
    renderDirectoryHero(e) {
        let { className: t, sku: n } = this.props;
        switch (e) {
            case 5:
                return (0, l.jsx)(R, { className: t });
            case 3:
                return (0, l.jsx)(j, { sku: n, className: x()(b.OB, t) });
            case 2:
                return (0, l.jsx)(L, { sku: n, className: x()(b.dk, t) });
            default:
                return (0, l.jsx)(k, { className: x()(b.dk, t), sku: n });
        }
    }
    renderListing(e) {
        let t,
            { className: n, sku: i } = this.props;
        switch (e) {
            case 5:
                t = (0, l.jsx)(R, {});
                break;
            case 2:
                t = (0, l.jsxs)(a.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: b.nM,
                            children: [(0, l.jsx)(k, { sku: i }), (0, l.jsx)(N, { sku: i })],
                        }),
                        (0, l.jsx)(S, { sku: i }),
                    ],
                });
                break;
            default:
                t = (0, l.jsx)(k, { sku: i });
        }
        return (0, l.jsx)("div", { className: x()(b.IH, n), children: t });
    }
    render() {
        let e = this.getState();
        if (null == e) return null;
        switch (this.props.type) {
            case 1:
                return this.renderDirectoryHero(e);
            case 2:
                return this.renderGeneric(e, b.Pl);
            case 3:
                return this.renderGeneric(e, b.jh);
            case 4:
                return this.renderListing(e);
            case 5:
                return this.renderGeneric(e, b.bk);
            default:
                throw Error("Invalid Price Unit Type");
        }
    }
}
var P = n(990078),
    D = n(953727),
    M = n(652215),
    O = n(842983);
let U = {
    [M.uje.WINDOWS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: a, ...r } = e;
            return (0, l.jsx)("svg", {
                ...(0, D.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M4 11.526V6.553l5.684-1.25v6.138L4 11.526zM20.105 3v8.29l-9.473.142V5.094L20.105 3zM4 12.474l5.684.085v6.452L4 17.92v-5.447zm16.105.237V21l-9.473-1.81v-6.622l9.473.143z",
                        }),
                        (0, l.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => I.intl.string(I.t["0/xHFO"]),
    },
    [M.uje.MACOS]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: a, ...r } = e;
            return (0, l.jsx)("svg", {
                ...(0, D.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M18.64 19.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.097-2.53-1.686-2.47-2.978-7.02-1.242-10.08.858-1.52 2.396-2.48 4.063-2.51 1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91.64.03 2.436.26 3.59 1.98-.09.06-2.14 1.28-2.12 3.81.029 3.02 2.612 4.03 2.642 4.04-.03.07-.414 1.44-1.36 2.83zm-5.631-16c.72-.829 1.913-1.459 2.899-1.499.128 1.17-.336 2.35-1.026 3.19-.68.85-1.804 1.51-2.909 1.42-.148-1.15.404-2.35 1.036-3.11z",
                        }),
                        (0, l.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => I.intl.string(I.t.E4u4n5),
    },
    [M.uje.LINUX]: {
        icon: function (e) {
            let { width: t = 24, height: n = 24, color: i = "currentColor", foreground: a, ...r } = e;
            return (0, l.jsx)("svg", {
                ...(0, D.A)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [
                        (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19-.39.31-.75.29-1.14-.01-.2-.16-1.53-.92-1.95-1.19-.48-.31-.45-.7.08-.92 1.64-.69 3.28-.64 4.91.03.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01-.2-.88-.29-1.78-.7-2.61-.73-1.58-2-2.4-3.84-2.47-1.81.05-3.16.81-3.95 2.4-.21.43-.36.88-.46 1.34-.17.76-.32 1.55-.5 2.32-.15.65-.45 1.21-.96 1.71-1.61 1.57-2.9 3.37-3.88 5.35-.14.29-.28.58-.37.88-.19.66.29 1.12.99.96.44-.09.88-.18 1.3-.31.41-.15.57-.05.67.35.65 2.15 2.07 3.66 4.24 4.5 4.12 1.56 8.93-.66 9.97-4.58.07-.27.17-.37.47-.27.46.14.93.24 1.4.35.49.09.85-.16.92-.64.03-.26-.06-.49-.16-.73",
                        }),
                        (0, l.jsx)("rect", { width: "24", height: "24" }),
                    ],
                }),
            });
        },
        getLabel: () => I.intl.string(I.t.tcawo3),
    },
};
function G(e) {
    let { operatingSystem: t, className: n } = e,
        i = U[t];
    if (null == i) throw Error(`Unexpected operating system: ${t}`);
    let a = i.icon;
    return (0, l.jsx)(P.m, { text: i.getLabel(), children: (0, l.jsx)(a, { className: n }) });
}
let B = (e) => {
    let { systems: t, className: n, iconClassName: i } = e;
    return (0, l.jsx)("div", {
        className: x()(O.I, n),
        children: t.map((e) => (0, l.jsx)(G, { operatingSystem: e, className: x()(O.A, i) }, e)),
    });
};
var V = n(111758);
let F = (e) => {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: x()(V.T, t),
        children: (0, l.jsx)("span", { className: V.Q, children: I.intl.string(I.t["14lP0W"]) }),
    });
};
var H = n(246337);
let z = (e) => {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: x()(H.T, t),
        children: (0, l.jsx)("span", { className: H.Q, children: I.intl.string(I.t["8IfYqa"]) }),
    });
};
var W = n(615300),
    Y = n(607399),
    K = n(451988),
    q = n(73939),
    Z = n(289873),
    J = n(358618),
    Q = n(983851),
    X = n(939249),
    $ = n(133296),
    ee = n(607470),
    et = n(61251);
class en extends a.Component {
    _animatedValue = new W.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), W.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        W.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
    };
    getImageStyle = () => ({ opacity: this._animatedValue });
    handleImageError = () => {
        this.setState({ imageLoadError: !0, imageLoading: !1 });
    };
    handleImageLoaded = () => {
        this.setState({ imageLoading: !1 });
    };
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, l.jsx)(W.A.img, {
            className: x()({ [et.YC]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: a } = this.state;
        return null == n || i
            ? (0, l.jsx)(W.A.div, { className: x()(et.gn, e), style: this.getImageStyle(), children: t })
            : (0, l.jsxs)(W.A.div, {
                  className: x()(a ? et.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, l.jsx)(Z.y, {
                                className: et.u1,
                                itemClassName: et.$N,
                                type: Z.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class ei extends a.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = a.createRef();
    videoTimeout = new K.Ep();
    videoPlaying = !1;
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n)
            if (t && !e.playing) {
                this.videoTimeout.stop(),
                    isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0),
                    (n.volume = 0.3);
                let e = n.play();
                null != e &&
                    e.then(() => {
                        this.videoPlaying = !0;
                    });
            } else
                e.playing &&
                    !t &&
                    this.videoTimeout.start(400, () => {
                        this.videoPlaying && (n.pause(), (this.videoPlaying = !1));
                    });
    }
    handleToggleMute = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onToggleMute: t } = this.props;
        t?.(e);
    };
    handleVideoError = () => {
        this.setState({ videoLoadError: !0 });
    };
    handleVideoLoaded = () => {
        this.setState({ videoLoaded: !0 });
    };
    renderTypeVideo = () => {
        let { videoLoaded: e } = this.state,
            {
                video: t,
                image: n,
                title: i,
                playing: r,
                muted: s,
                splashClassName: o,
                splashPlaceholderClassName: c,
                renderMediaOverlay: d,
            } = this.props,
            u = s ? J._ : Q.H;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                Y.Fr
                    ? null
                    : (0, l.jsx)(ee.A, {
                          className: x()(et.Yi, o),
                          muted: s,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, l.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, l.jsx)(q.F, {
                    children: r && e ? null : (0, l.jsx)(en, { className: x()(et.NB, c), src: n, title: i }, 0),
                }),
                (0, l.jsx)(X.D, {
                    className: x()(et.b4, { [et.HY]: r && e, [et.Hy]: null != d }),
                    onClick: this.handleToggleMute,
                    children: r && e ? (0, l.jsx)(u, { className: et.i2 }) : null,
                }),
            ],
        });
    };
    nextItem = () => {
        let { slideImages: e } = this.props;
        null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
    };
    renderSlideItem = (e) => {
        let { image: t, title: n, playing: i, splashClassName: a } = this.props,
            { currentIndex: r } = this.state;
        return i
            ? (0, l.jsx)(en, { className: x()(et.Yi, a), src: e[r], title: n }, r)
            : (0, l.jsx)(en, { className: x()(et.Yi, a), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: a } = this.props;
        return null == t
            ? (0, l.jsx)(en, { className: x()(et.Yi, a), src: n, title: i }, "image")
            : (0, l.jsx)($.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: et.mZ,
                  disable: !e,
                  children: (0, l.jsx)(q.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: a } = this.props,
            { videoLoadError: r, videoLoaded: s } = this.state;
        return n
            ? (0, l.jsx)("div", { className: t })
            : (0, l.jsxs)("figure", {
                  className: x()(et.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && s)],
              });
    }
}
var el = n(871123),
    ea = n(366523),
    er = n(371794),
    es = n(863574),
    eo = n(622413),
    ec = n(174264);
class ed extends a.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1,
    };
    renderActions = () => {
        let { inLibrary: e, sku: t, renderCustomActions: n, isMouseOver: i, showBuyInline: a } = this.props,
            r = (a || !t.requiresPayment) && !e;
        return null != n
            ? n()
            : (0, l.jsxs)("div", {
                  className: ec.ED,
                  children: [
                      (0, l.jsx)(w, {
                          type: w.Types.DIRECTORY_TILE,
                          sku: t,
                          inLibrary: e,
                          className: r && i ? ec.ae : ec.Ek,
                      }),
                      (0, l.jsx)(B, { systems: [M.uje.WINDOWS], className: ec.iD }),
                      r ? (0, l.jsx)("div", { children: "deprecated!" }) : null,
                  ],
              });
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: i,
            sku: r,
            isHorizontal: s,
            storeListing: o,
        } = this.props;
        return (0, el.bF)(r)
            ? (0, l.jsx)(ea.e, {
                  sku: r,
                  shape: "custom",
                  containerClassName: ec.A$,
                  backgroundImageClassName: ec.iZ,
                  foregroundImageClassName: ec.O7,
              })
            : (0, l.jsxs)(a.Fragment, {
                  children: [
                      (0, l.jsx)(ei, {
                          className: x()(ec.H1, { [ec.ZC]: s }),
                          video: null != o.previewVideo ? (0, er.YE)(r.applicationId, o.previewVideo) : void 0,
                          image: null != o.thumbnail ? (0, er.YE)(r.applicationId, o.thumbnail, 600) : void 0,
                          title: r.name,
                          playing: e,
                          muted: t,
                          placeholder: n,
                          onToggleMute: i,
                          splashClassName: ec.ZI,
                          splashPlaceholderClassName: ec.NB,
                      }),
                      r.exclusive
                          ? (0, l.jsx)(z, { className: x()(ec.LJ, { [ec.V9]: e }) })
                          : r.isTheGameAwardsWinner
                            ? (0, l.jsx)(F, { className: x()(ec.LJ, { [ec.V9]: e }) })
                            : null,
                  ],
              });
    };
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: i,
                renderCustomTagline: a,
                renderCustomTitle: r,
                renderCustomMedia: s,
                isEmbed: o,
            } = this.props,
            c = o ? es.ug : eo.A;
        return (0, l.jsx)(c, {
            className: i,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n,
        });
    }
}
var eu = n(707606),
    e_ = n(456412),
    em = n(587895),
    eh = n(976860),
    ep = n(328968),
    eg = n(981449);
class ef extends a.Component {
    static defaultProps = { renderFallback: M.tEg };
    state = { playing: !1, muted: !0 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
            analyticsSection: t,
        } = this.props;
        return { ...e, section: null != t ? t : M.JJy.APPLICATION_EMBED, object: M.ZSU.CARD };
    }
    componentDidMount() {
        let { sku: e, skuId: t, storeListing: n } = this.props;
        (null == e || null == n) && (0, c.QB)(t);
    }
    handleToggleMute = () => {
        this.setState({ muted: !this.state.muted });
    };
    handleMouseEnter = () => {
        this.setState({ playing: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ playing: !1 });
    };
    handleActionButtonClick = (e) => e.preventDefault();
    handleBuyButtonClick = (e) => e.preventDefault();
    handleLinkClick = (e) => {
        let { onEmbedClick: t } = this.props;
        null != t && t(e);
    };
    renderViewInStoreButton() {
        return (0, l.jsx)("div", {
            className: eg.h,
            children: (0, l.jsx)(s.$, {
                role: "link",
                variant: "active",
                size: "sm",
                text: I.intl.string(I.t["W+NB90"]),
                onClick: () => {
                    (0, eh.pX)(M.BVt.APPLICATION_STORE);
                },
            }),
        });
    }
    renderApplicationTile = (e, t) => {
        let { inLibrary: n, width: i, renderCustomTitle: a, renderCustomTagline: r, renderCustomMedia: s } = this.props,
            { playing: o, muted: c } = this.state,
            d = i > es.Tm;
        return (0, l.jsx)(ed, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: c,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: a,
            renderCustomTagline: r,
            renderCustomMedia: s,
            isHorizontal: d,
            isEmbed: !0,
        });
    };
    renderActions = (e) => {
        let { inLibrary: t, application: n, skuId: i, libraryApplication: a, renderCustomActions: r } = this.props;
        if (null != r) return (0, l.jsx)("div", { className: eg.i, children: r() });
        if (null == n) return null;
        let s = null != n && n.primarySkuId === i,
            o = null != a && a.hasFlag(M.hM6.HIDDEN);
        return (0, l.jsxs)("div", {
            className: eg.i,
            children: [
                !s || o
                    ? this.renderViewInStoreButton()
                    : (0, l.jsx)(g, {
                          application: n,
                          disabledVariant: "primary",
                          size: "sm",
                          className: eg.h,
                          source: M.ThZ.MESSAGE_EMBED,
                          onClick: this.handleActionButtonClick,
                      }),
                (t && !o) || e.premium ? null : (0, l.jsx)(w, { type: w.Types.EMBED, sku: e, inLibrary: !1 }),
            ],
        });
    };
    render() {
        let { sku: e, storeListing: t, width: n, fetchFailed: i, renderFallback: a } = this.props,
            s = n > es.Tm;
        return null == e || null == t
            ? i
                ? a()
                : (0, l.jsx)(es.Wb, { isHorizontal: s })
            : e.productLine === M.EZt.COLLECTIBLES
              ? (0, l.jsx)(d.A, { section: M.JJy.APPLICATION_EMBED, children: this.renderApplicationTile(e, t) })
              : (0, l.jsx)(d.A, {
                    section: M.JJy.APPLICATION_EMBED,
                    children: (0, l.jsx)(r.N_, {
                        onClick: this.handleLinkClick,
                        to: M.BVt.APPLICATION_STORE,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: this.renderApplicationTile(e, t),
                    }),
                });
    }
}
let ex = [_.A, u.A, ep.A];
function eA(e) {
    let { skuId: t } = e,
        n = _.A.get(t),
        i = null != n ? em.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: _.A.didFetchingSkuFail(t),
        inLibrary: null != n && u.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? ep.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? u.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null,
    };
}
let eC = (0, e_.A)((0, eu.A)(ef)),
    ev = o.Ay.connectStores(ex, eA)(eC),
    eI = (0, eu.A)(o.Ay.connectStores(ex, eA)(ef));
