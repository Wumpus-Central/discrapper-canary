n.d(t, {
    Z: () => E,
    x: () => j,
}),
    n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(620389),
    c = n(772848),
    d = n(681715),
    u = n(477690),
    g = n(481060),
    m = n(624138),
    f = n(981631),
    b = n(556970),
    p = n(388032),
    h = n(788555);
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
    v = (0, m.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    O = (0, m.Mg)(u.Z.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    y = {
        tension: 140,
        friction: 30,
    },
    C = {
        tension: 800,
        friction: 20,
    };
class N extends (r = l.Component) {
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
            a = t.numRequired - i.numRequired,
            s = r - i.numRequired;
        return i.y + (s / a) * l;
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
        if (null == e.name || e.key === f.Eu4.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return this.getTierDisabled(e)
            ? {
                  title: null,
                  body: p.intl.formatToPlainString(b.default["9CtPjt"], { perk: e.name }),
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
            { progress: l, tiers: a } = this.props,
            s = a[n],
            c = l >= e.numRequired,
            u = null != s && e.key === s.key,
            m = e.key === a[0].key,
            f = this.getTierDisabled(e);
        r = m ? h.tierFirst : f ? h.tierInProgress : u ? h.tierCurrent : c ? h.tierAccomplished : h.tierInProgress;
        let b = e.y - (m ? 0 : O / 2),
            p = this.state.tierMarkerActive >= t,
            x = !m && u && p,
            j = this.getTierMarkerTooltipText(e);
        return (0, i.jsx)(
            g.AMe,
            {
                from: { scale: 1 },
                to: { scale: x ? 1.625 : 1 },
                config: C,
                children: (t) => {
                    var n, l, a;
                    return (0, i.jsx)(d.i_, {
                        body: null != (n = null == j ? void 0 : j.body) ? n : "",
                        title: null != (l = null == j ? void 0 : j.title) ? l : void 0,
                        shouldShow: null != j,
                        position: "right",
                        "aria-label": null != (a = e.name) ? a : "",
                        children: (0, i.jsx)(o.animated.div, {
                            className: r,
                            style: {
                                top: b,
                                transform: t.scale.interpolate((e) => "scale(".concat(e, ")")),
                            },
                            children:
                                x &&
                                (0, i.jsx)(g.dz2, {
                                    size: "md",
                                    color: "currentColor",
                                    className: h.currentTierIcon,
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
                    width: v,
                    height: e,
                    fill: "white",
                }),
                t.map((e) =>
                    (0, i.jsx)(
                        "circle",
                        {
                            cx: v / 2,
                            cy: e.y,
                            r: v / 2,
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
                    className: h.background,
                    height: e,
                    fill: "currentColor",
                }),
                (0, i.jsx)(g.AMe, {
                    from: { height: 0 },
                    to: { height: n },
                    config: y,
                    delay: r ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: r ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(o.animated.rect, {
                            className: h.foreground,
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
            className: s()(e, h.progressBar),
            style: { height: r },
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: "0 0 ".concat(v, " ").concat(r),
                    width: v,
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
            x(this, "tierMarkerMaskId", (0, c.Z)()),
            x(this, "handleForegroundFrame", (e) => {
                let { height: t } = e,
                    { tiers: n, progress: r, onAnimatedTierMaker: i } = this.props,
                    { tierMarkerActive: l } = this.state;
                for (let e = n.length - 1; e > 0; e--) {
                    let a = n[e],
                        s = l === e;
                    if (t + 20 >= a.y && r >= a.numRequired) {
                        s || (this.setState({ tierMarkerActive: e }), null != i && i(a));
                        return;
                    }
                }
            }),
            x(this, "handleFinishedInitialAnimation", () => {
                this.setState({ finishedInitialAnimation: !0 });
            });
    }
}
x(N, "defaultProps", { initialAnimationDelay: 0 });
let E = N;
