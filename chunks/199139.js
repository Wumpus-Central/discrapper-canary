n.d(t, { A: () => A, h: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(835245),
    d = n(459192),
    c = n(319060),
    u = n(805901),
    m = n(933832),
    g = n(240248),
    h = n(652215),
    x = n(853513),
    _ = n(985018),
    p = n(351406);
let A = -1,
    E = (0, g.xI)(c.A.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    f = (0, g.xI)(c.A.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    j = { tension: 140, friction: 30 },
    N = { tension: 800, friction: 20 };
class I extends l.Component {
    state = { tierMarkerActive: 0, finishedInitialAnimation: !1 };
    tierMarkerMaskId = (0, o.A)();
    static defaultProps = { initialAnimationDelay: 0 };
    getTotalHeight() {
        let { tiers: e } = this.props;
        return e[e.length - 1].y + f / 2;
    }
    getProgressHeight(e) {
        let t,
            { tiers: n, progress: i } = this.props,
            l = n[e];
        for (let e = n.length - 1; e > 0; e--) {
            if (i === n[e].numRequired) return n[e].y;
            if (i > n[e].numRequired) {
                t = n[e + 1];
                break;
            }
        }
        if (null == t) return l.y;
        let s = t.y - l.y,
            r = t.numRequired - l.numRequired,
            a = i - l.numRequired;
        return l.y + (a / r) * s;
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
    handleForegroundFrame = (e) => {
        let { height: t } = e,
            { tiers: n, progress: i, onAnimatedTierMaker: l } = this.props,
            { tierMarkerActive: s } = this.state;
        for (let e = n.length - 1; e > 0; e--) {
            let r = n[e],
                a = s === e;
            if (t + 20 >= r.y && i >= r.numRequired) {
                a || (this.setState({ tierMarkerActive: e }), null != l && l(r));
                return;
            }
        }
    };
    handleFinishedInitialAnimation = () => {
        this.setState({ finishedInitialAnimation: !0 });
    };
    getTierMarkerTooltipText(e) {
        let { progress: t } = this.props;
        if (null == e.name || e.key === h.TVA.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return this.getTierDisabled(e)
            ? { title: null, body: _.intl.formatToPlainString(x.default["9CtPjt"], { perk: e.name }) }
            : { title: e.name, body: _.intl.format(_.t.AkLa6n, { subscribers: n, numRequired: e.numRequired }) };
    }
    renderTierMarker(e, t, n) {
        let l,
            { progress: s, tiers: r } = this.props,
            o = r[n],
            c = s >= e.numRequired,
            g = null != o && e.key === o.key,
            h = e.key === r[0].key,
            x = this.getTierDisabled(e);
        l = h ? p.LR : x ? p.B2 : g ? p.E2 : c ? p.lZ : p.B2;
        let _ = e.y - (h ? 0 : f / 2),
            A = this.state.tierMarkerActive >= t,
            E = !h && g && A,
            j = this.getTierMarkerTooltipText(e);
        return (0, i.jsx)(
            u.c,
            {
                from: { scale: 1 },
                to: { scale: E ? 1.625 : 1 },
                config: N,
                children: (t) =>
                    (0, i.jsx)(d.u, {
                        body: j?.body ?? "",
                        title: j?.title ?? void 0,
                        shouldShow: null != j,
                        position: "right",
                        "aria-label": e.name ?? "",
                        children: (0, i.jsx)(a.animated.div, {
                            className: l,
                            style: { top: _, transform: t.scale.interpolate((e) => `scale(${e})`) },
                            children: E && (0, i.jsx)(m.A, { size: "md", color: "currentColor", className: p.zw }),
                        }),
                    }),
            },
            e.key,
        );
    }
    renderProgressMask(e) {
        let { tiers: t } = this.props;
        return (0, i.jsxs)("mask", {
            id: `${this.tierMarkerMaskId}`,
            children: [
                (0, i.jsx)("rect", { x: "0", y: "0", width: E, height: e, fill: "white" }),
                t.map((e) => (0, i.jsx)("circle", { cx: E / 2, cy: e.y, r: E / 2, fill: "black" }, e.key)),
            ],
        });
    }
    renderProgressBar(e, t) {
        let n = this.getProgressHeight(t),
            { finishedInitialAnimation: l } = this.state;
        return (0, i.jsxs)("g", {
            mask: `url(#${this.tierMarkerMaskId})`,
            children: [
                (0, i.jsx)("rect", { className: p.Tp, height: e, fill: "currentColor" }),
                (0, i.jsx)(u.c, {
                    from: { height: 0 },
                    to: { height: n },
                    config: j,
                    delay: l ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: l ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(a.animated.rect, {
                            className: p.CU,
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
            l = this.getTotalHeight();
        return (0, i.jsxs)("div", {
            className: r()(e, p.hr),
            style: { height: l },
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: `0 0 ${E} ${l}`,
                    width: E,
                    height: l,
                    children: [this.renderProgressMask(l), this.renderProgressBar(l, n)],
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
            ],
        });
    }
}
let C = I;
