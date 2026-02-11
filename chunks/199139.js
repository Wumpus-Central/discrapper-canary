"use strict";
n.d(t, { A: () => A, h: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(563495),
    o = n(835245),
    d = n(435371),
    c = n(319060),
    u = n(397927),
    g = n(240248),
    m = n(652215),
    x = n(136708),
    h = n(985018),
    _ = n(152781);
let A = -1,
    p = (0, g.xI)(c.A.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH),
    f = (0, g.xI)(c.A.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE),
    j = { tension: 140, friction: 30 },
    N = { tension: 800, friction: 20 };
class E extends s.Component {
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
            s = n[e];
        for (let e = n.length - 1; e > 0; e--) {
            if (i === n[e].numRequired) return n[e].y;
            if (i > n[e].numRequired) {
                t = n[e + 1];
                break;
            }
        }
        if (null == t) return s.y;
        let l = t.y - s.y,
            r = t.numRequired - s.numRequired,
            a = i - s.numRequired;
        return s.y + (a / r) * l;
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
            { tiers: n, progress: i, onAnimatedTierMaker: s } = this.props,
            { tierMarkerActive: l } = this.state;
        for (let e = n.length - 1; e > 0; e--) {
            let r = n[e],
                a = l === e;
            if (t + 20 >= r.y && i >= r.numRequired) {
                a || (this.setState({ tierMarkerActive: e }), null != s && s(r));
                return;
            }
        }
    };
    handleFinishedInitialAnimation = () => {
        this.setState({ finishedInitialAnimation: !0 });
    };
    getTierMarkerTooltipText(e) {
        let { progress: t } = this.props;
        if (null == e.name || e.key === m.TVA.NONE) return null;
        let n = Math.min(t, e.numRequired);
        return this.getTierDisabled(e)
            ? { title: null, body: h.intl.formatToPlainString(x.default["9CtPjt"], { perk: e.name }) }
            : { title: e.name, body: h.intl.format(h.t.AkLa6n, { subscribers: n, numRequired: e.numRequired }) };
    }
    renderTierMarker(e, t, n) {
        let s,
            { progress: l, tiers: r } = this.props,
            o = r[n],
            c = l >= e.numRequired,
            g = null != o && e.key === o.key,
            m = e.key === r[0].key,
            x = this.getTierDisabled(e);
        s = m ? _.LR : x ? _.B2 : g ? _.E2 : c ? _.lZ : _.B2;
        let h = e.y - (m ? 0 : f / 2),
            A = this.state.tierMarkerActive >= t,
            p = !m && g && A,
            j = this.getTierMarkerTooltipText(e);
        return (0, i.jsx)(
            u.c7X,
            {
                from: { scale: 1 },
                to: { scale: p ? 1.625 : 1 },
                config: N,
                children: (t) =>
                    (0, i.jsx)(d.un, {
                        body: j?.body ?? "",
                        title: j?.title ?? void 0,
                        shouldShow: null != j,
                        position: "right",
                        "aria-label": e.name ?? "",
                        children: (0, i.jsx)(a.animated.div, {
                            className: s,
                            style: { top: h, transform: t.scale.interpolate((e) => `scale(${e})`) },
                            children: p && (0, i.jsx)(u.A9s, { size: "md", color: "currentColor", className: _.zw }),
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
                (0, i.jsx)("rect", { x: "0", y: "0", width: p, height: e, fill: "white" }),
                t.map((e) => (0, i.jsx)("circle", { cx: p / 2, cy: e.y, r: p / 2, fill: "black" }, e.key)),
            ],
        });
    }
    renderProgressBar(e, t) {
        let n = this.getProgressHeight(t),
            { finishedInitialAnimation: s } = this.state;
        return (0, i.jsxs)("g", {
            mask: `url(#${this.tierMarkerMaskId})`,
            children: [
                (0, i.jsx)("rect", { className: _.Tp, height: e, fill: "currentColor" }),
                (0, i.jsx)(u.c7X, {
                    from: { height: 0 },
                    to: { height: n },
                    config: j,
                    delay: s ? 0 : this.props.initialAnimationDelay,
                    onChange: this.handleForegroundFrame,
                    onRest: s ? void 0 : this.handleFinishedInitialAnimation,
                    children: (e) =>
                        (0, i.jsx)(a.animated.rect, {
                            className: _.CU,
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
            s = this.getTotalHeight();
        return (0, i.jsxs)("div", {
            className: r()(e, _.hr),
            style: { height: s },
            children: [
                (0, i.jsxs)("svg", {
                    viewBox: `0 0 ${p} ${s}`,
                    width: p,
                    height: s,
                    children: [this.renderProgressMask(s), this.renderProgressBar(s, n)],
                }),
                t.map((e, t) => this.renderTierMarker(e, t, n)),
            ],
        });
    }
}
let b = E;
