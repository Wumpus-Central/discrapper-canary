n.d(t, {
    A: () => j,
    h: () => N,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    c = n(432022),
    o = n(835245),
    d = n(435371),
    u = n(319060),
    f = n(397927),
    g = n(240248),
    b = n(652215),
    m = n(333354),
    p = n(985018),
    x = n(576943);
function h(e, t, n) {
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
    O = (0, g.xI)(u.A.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    y = (0, g.xI)(u.A.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    v = {
        tension: 140,
        friction: 30,
    },
    A = {
        tension: 800,
        friction: 20,
    };
class E extends (r = l.Component) {
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + y / 2;
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
        if (null == e.name || e.key === b.TVA.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return this.getTierDisabled(e)
            ? {
                  title: null,
                  body: p.intl.formatToPlainString(m.default["9CtPjt"], { perk: e.name }),
              }
            : {
                  title: e.name,
                  body: p.intl.format(p.t.AkLa6n, {
                      subscribers: n,
                      numRequired: e.numRequired,
                  }),
              };
    }
    renderTierMarker(e, t, n) {
        let r,
            { progress: l, tiers: s } = this.props,
            a = s[n],
            o = l >= e.numRequired,
            u = null != a && e.key === a.key,
            g = e.key === s[0].key,
            b = this.getTierDisabled(e);
        r = g ? x.LR : b ? x.B2 : u ? x.E2 : o ? x.lZ : x.B2;
        let m = e.y - (g ? 0 : y / 2),
            p = this.state.tierMarkerActive >= t,
            h = !g && u && p,
            j = this.getTierMarkerTooltipText(e);
        return (0, i.jsx)(
            f.c7X,
            {
                from: { scale: 1 },
                to: { scale: h ? 1.625 : 1 },
                config: A,
                children: (t) => {
                    var n, l, s;
                    return (0, i.jsx)(d.un, {
                        body: null != (n = null == j ? void 0 : j.body) ? n : "",
                        title: null != (l = null == j ? void 0 : j.title) ? l : void 0,
                        shouldShow: null != j,
                        position: "right",
                        "aria-label": null != (s = e.name) ? s : "",
                        children: (0, i.jsx)(c.animated.div, {
                            className: r,
                            style: {
                                top: m,
                                transform: t.scale.interpolate((e) => "scale(".concat(e, ")")),
                            },
                            children:
                                h &&
                                (0, i.jsx)(f.A9s, {
                                    size: "md",
                                    color: "currentColor",
                                    className: x.zw,
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
                    width: O,
                    height: e,
                    fill: "white",
                }),
                t.map((e) =>
                    (0, i.jsx)(
                        "circle",
                        {
                            cx: O / 2,
                            cy: e.y,
                            r: O / 2,
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
                    className: x.Tp,
                    height: e,
                    fill: "currentColor",
                }),
                (0, i.jsx)(f.c7X, {
                    from: { height: 0 },
                    to: { height: n },
                    config: v,
                    delay: r ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: r ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(c.animated.rect, {
                            className: x.CU,
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
            className: a()(e, x.hr),
            style: { height: r },
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: "0 0 ".concat(O, " ").concat(r),
                    width: O,
                    height: r,
                    children: [this.renderProgressMask(r), this.renderProgressBar(r, n)],
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", {
                tierMarkerActive: 0,
                finishedInitialAnimation: !1,
            }),
            h(this, "tierMarkerMaskId", (0, o.A)()),
            h(this, "handleForegroundFrame", (e) => {
                let { height: t } = e,
                    { tiers: n, progress: r, onAnimatedTierMaker: i } = this.props,
                    { tierMarkerActive: l } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let s = n[e],
                        a = l === e;
                    if (t + 20 >= s.y && r >= s.numRequired) {
                        a || (this.setState({ tierMarkerActive: e }), null != i && i(s));
                        return;
                    }
                }
            }),
            h(this, "handleFinishedInitialAnimation", () => {
                this.setState({ finishedInitialAnimation: !0 });
            });
    }
}
h(E, "defaultProps", { initialAnimationDelay: 0 });
let N = E;
