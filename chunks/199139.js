n.d(t, {
    A: () => j,
    h: () => E,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(92674),
    c = n(835245),
    d = n(435371),
    u = n(319060),
    g = n(397927),
    m = n(240248),
    p = n(652215),
    f = n(333354),
    h = n(985018),
    b = n(576943);

function x(e, t, n) {
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
let j = -1,
    _ = (0, m.xI)(u.A.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    O = (0, m.xI)(u.A.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    v = {
        tension: 140,
        friction: 30,
    },
    y = {
        tension: 800,
        friction: 20,
    };
class A extends (r = l.Component) {
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + O / 2;
    }
    getProgressHeight(e) {
        let t,
            { tiers: n, progress: r } = this.props,
            i = n[e];
        for (let e = n.length - 1; e > 0; e--) {
            if (r === n[e].numRequired) return n[e].y;
            if (r > n[e].numRequired) {
                t = n[e + 1];
                break;
            }
        }
        if (null == t) return i.y;
        let l = t.y - i.y,
            s = t.numRequired - i.numRequired,
            a = r - i.numRequired;
        return i.y + (a / s) * l;
    }
    getCurrentTierIndex() {
        let { currentTier: e, tiers: t } = this.props;
        for (let n = t.length - 1; n > 0; n--) if (e >= t[n].key) return n;
        return 0;
    }
    getTierDisabled(e) {
        let { currentTier: t, progress: n } = this.props;
        return t < e.key && n >= e.numRequired;
    }
    getTierMarkerTooltipText(e) {
        let { progress: t } = this.props;
        if (null == e.name || e.key === p.TVA.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return this.getTierDisabled(e)
            ? {
                  title: null,
                  body: h.intl.formatToPlainString(f.default["9CtPjt"], {
                      perk: e.name,
                  }),
              }
            : {
                  title: e.name,
                  body: h.intl.format(h.t.AkLa6n, {
                      subscribers: n,
                      numRequired: e.numRequired,
                  }),
              };
    }
    renderTierMarker(e, t, n) {
        let r,
            { progress: l, tiers: s } = this.props,
            a = s[n],
            c = l >= e.numRequired,
            u = null != a && e.key === a.key,
            m = e.key === s[0].key,
            p = this.getTierDisabled(e);
        r = m ? b.LR : p ? b.B2 : u ? b.E2 : c ? b.lZ : b.B2;
        let f = e.y - (m ? 0 : O / 2),
            h = this.state.tierMarkerActive >= t,
            x = !m && u && h,
            j = this.getTierMarkerTooltipText(e);
        return (0, i.jsx)(
            g.c7X,
            {
                from: {
                    scale: 1,
                },
                to: {
                    scale: x ? 1.625 : 1,
                },
                config: y,
                children: (t) => {
                    var n, l, s;
                    return (0, i.jsx)(d.un, {
                        body: null != (n = null == j ? void 0 : j.body) ? n : "",
                        title: null != (l = null == j ? void 0 : j.title) ? l : void 0,
                        shouldShow: null != j,
                        position: "right",
                        "aria-label": null != (s = e.name) ? s : "",
                        children: (0, i.jsx)(o.animated.div, {
                            className: r,
                            style: {
                                top: f,
                                transform: t.scale.interpolate((e) => "scale(".concat(e, ")")),
                            },
                            children:
                                x &&
                                (0, i.jsx)(g.A9s, {
                                    size: "md",
                                    color: "currentColor",
                                    className: b.zw,
                                }),
                        }),
                    });
                },
            },
            e.key,
        );
    }
    renderProgressMask(e) {
        let { tiers: t } = this.props;
        return (0, i.jsxs)("mask", {
            id: "".concat(this.tierMarkerMaskId),
            children: [
                (0, i.jsx)("rect", {
                    x: "0",
                    y: "0",
                    width: _,
                    height: e,
                    fill: "white",
                }),
                t.map((e) =>
                    (0, i.jsx)(
                        "circle",
                        {
                            cx: _ / 2,
                            cy: e.y,
                            r: _ / 2,
                            fill: "black",
                        },
                        e.key,
                    ),
                ),
            ],
        });
    }
    renderProgressBar(e, t) {
        let n = this.getProgressHeight(t),
            { finishedInitialAnimation: r } = this.state;
        return (0, i.jsxs)("g", {
            mask: "url(#".concat(this.tierMarkerMaskId, ")"),
            children: [
                (0, i.jsx)("rect", {
                    className: b.Tp,
                    height: e,
                    fill: "currentColor",
                }),
                (0, i.jsx)(g.c7X, {
                    from: {
                        height: 0,
                    },
                    to: {
                        height: n,
                    },
                    config: v,
                    delay: r ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: r ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(o.animated.rect, {
                            className: b.CU,
                            height: e.height.interpolate((e) => Math.max(0, e)),
                            fill: "currentColor",
                        }),
                }),
            ],
        });
    }
    render() {
        let { className: e, tiers: t } = this.props,
            n = this.getCurrentTierIndex(),
            r = this.getTotalHeight();
        return (0, i.jsxs)("div", {
            className: a()(e, b.hr),
            style: {
                height: r,
            },
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: "0 0 ".concat(_, " ").concat(r),
                    width: _,
                    height: r,
                    children: [this.renderProgressMask(r), this.renderProgressBar(r, n)],
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", {
                tierMarkerActive: 0,
                finishedInitialAnimation: !1,
            }),
            x(this, "tierMarkerMaskId", (0, c.A)()),
            x(this, "handleForegroundFrame", (e) => {
                let { height: t } = e,
                    { tiers: n, progress: r, onAnimatedTierMaker: i } = this.props,
                    { tierMarkerActive: l } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let s = n[e],
                        a = l === e;
                    if (t + 20 >= s.y && r >= s.numRequired) {
                        a ||
                            (this.setState({
                                tierMarkerActive: e,
                            }),
                            null != i && i(s));
                        return;
                    }
                }
            }),
            x(this, "handleFinishedInitialAnimation", () => {
                this.setState({
                    finishedInitialAnimation: !0,
                });
            });
    }
}
x(A, "defaultProps", {
    initialAnimationDelay: 0,
});
let E = A;
