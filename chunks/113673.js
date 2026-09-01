"use strict";
n.r(t),
    n.d(t, {
        repairApplication: () => G,
        updateApplication: () => w,
        playApplication: () => R,
        installApplication: () => U,
        performDefaultLibraryApplicationAction: () => x,
    });
var i = n(92077),
    r = n(477900),
    a = n(582128),
    s = n(536637),
    l = n.n(s),
    o = n(17928),
    d = n(935462),
    c = n(939249),
    u = n(821609),
    _ = n(297264),
    E = n(192308),
    A = n(54827),
    h = n(780907),
    I = n(587895),
    f = n(235986),
    p = n(465797),
    T = n(174459),
    m = n(652215),
    g = n(375708),
    S = n(990587),
    N = n(221851);
class C extends a.PureComponent {
    onClose = () => {
        this.props.onClose();
    };
    handlePlay = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                { libraryApplication: i, analyticsParams: r } = e.props;
            e.onClose(), R(i.id, i, { analyticsParams: r, cloudSync: t, cloudSyncForceHash: n });
        };
    })();
    handleChooseDownload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === m.VX0.CONFLICT && this.handlePlay(!0, e.remote.hash);
    };
    handleChooseUpload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === m.VX0.CONFLICT && this.handlePlay(!0, e.next.hash);
    };
    renderConflictButton(e, t, n, i) {
        return (0, r.jsx)(c.D, {
            className: S.fe,
            onClick: i,
            "aria-label": e,
            children: (0, r.jsxs)("div", {
                className: S.tm,
                children: [
                    (0, r.jsx)("div", { className: n }),
                    (0, r.jsxs)("div", {
                        className: S.fn,
                        children: [
                            (0, r.jsx)("div", { className: S.Pc, children: e }),
                            (0, r.jsx)("div", { children: g.intl.string(g.t.gflHO6) }),
                            (0, r.jsx)("div", { className: S.vE, children: l()(t).calendar() }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsxs)(d.$m, {
                    children: [
                        (0, r.jsx)(f.A, {
                            justify: f.A.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: S.aR }),
                        }),
                        (0, r.jsx)("div", {
                            className: S.h_,
                            children: g.intl.format(g.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(d.jl, {
                    children: (0, r.jsxs)(f.A, {
                        justify: f.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(u.$, {
                                variant: "secondary",
                                text: g.intl.string(g.t["ETE/oC"]),
                                onClick: this.onClose,
                            }),
                            (0, r.jsxs)(f.A, {
                                direction: f.A.Direction.HORIZONTAL,
                                justify: f.A.Justify.END,
                                children: [
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.ft,
                                        children: (0, r.jsx)(u.$, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t["5911Lb"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, r.jsx)(u.$, {
                                        variant: "primary",
                                        text: g.intl.string(g.t["359Pbd"]),
                                        onClick: () => this.handlePlay(!1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    renderConflict() {
        let { application: e, cloudSyncState: t } = this.props;
        if (t.type !== m.VX0.CONFLICT) throw Error("Cannot render conflict for non conflict type");
        return (0, r.jsxs)(d.$m, {
            className: N.SX,
            children: [
                (0, r.jsx)("div", {
                    className: S.h_,
                    children: g.intl.format(g.t.eyXUP6, { applicationName: e.name }),
                }),
                this.renderConflictButton(
                    g.intl.string(g.t.AQUmkr),
                    t.remote.timestamp,
                    S.Mp,
                    this.handleChooseDownload,
                ),
                (0, r.jsxs)(f.A, {
                    className: S.Bu,
                    align: f.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", { className: S.cd }),
                        (0, r.jsx)("div", { className: S.WW, children: g.intl.string(g.t.WUsA2D) }),
                        (0, r.jsx)("div", { className: S.cd }),
                    ],
                }),
                this.renderConflictButton(g.intl.string(g.t.AXVwsw), t.next.timestamp, S.Hs, this.handleChooseUpload),
            ],
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === m.VX0.CONFLICT ? g.intl.string(g.t.oNbO1f) : g.intl.string(g.t.as4Tgg);
        return (0, r.jsxs)(d.EO, {
            transitionState: t,
            className: S.yl,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, r.jsxs)(d.rQ, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(d.s_, { className: S.b, onClick: this.onClose }),
                        (0, r.jsx)(_.D, { variant: "heading-lg/semibold", className: N.Gf, children: n }),
                    ],
                }),
                e.type === m.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
}
let O = o.Ay.connectStores([p.A, I.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return { cloudSyncState: p.A.getState(t.id, n), application: I.A.getApplication(t.id) };
})(C);
async function R(e, t, n) {
    let i = I.A.getApplication(e);
    if (null == i) return;
    let { cloudSync: a = !0, cloudSyncForceHash: s = null, analyticsParams: l } = n;
    if (a && null != t) {
        let e = t.branchId;
        try {
            await A.O(t.id, e, s);
        } catch (n) {
            (0, E.openModal)((n) => (0, r.jsx)(O, { libraryApplication: t, analyticsParams: l, branchId: e, ...n }));
            return;
        }
    }
    return (
        T.default.track(m.HAw.APPLICATION_OPENED, {
            application_id: i.id,
            application_name: i.name,
            type: m.UqL.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...l,
        }),
        h.Ay.launch({ applicationId: i.id, branchId: t?.branchId })
    );
}
var L = n(568004),
    y = n(227841),
    D = n(340829),
    v = n(966846),
    b = n(293066),
    M = n(775228);
function P(e, t, a, s, l) {
    let o = M.A.getInstallationPath(e.id, t),
        d = null != e.eulaId && !b.A.hasAcceptedEULA(e.eulaId);
    null == o || d
        ? (0, E.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                  n.e("205035"),
                  n.e("253729"),
                  n.e("234236"),
                  n.e("652753"),
                  n.e("790345"),
              ]).then(n.bind(n, 353904));
              return (n) => (0, r.jsx)(i, { ...n, applicationId: e.id, branchId: t, analyticsLocation: l });
          })
        : (0, i.oc)({
              application: e,
              branchId: t,
              buildId: a,
              manifestIds: s,
              installationPath: o,
              analyticsLocation: l,
          });
}
function U(e, t, n) {
    let i = I.A.getApplication(e);
    if (null == i) return;
    let r = L.A.getTargetBuildId(i.id, t),
        a = L.A.getTargetManifests(i.id, t);
    null != r && null != a && null != P && P(i, t, r, a, n);
}
function w(e, t) {
    let n = I.A.getApplication(e);
    if (null != n) return i.K3(n, t, L.A.getTargetBuildId(n.id, t), L.A.getTargetManifests(n.id, t));
}
function G(e, t, n) {
    let r = I.A.getApplication(e);
    if (null != r) return i.qv(r, t, n);
}
function x(e, t) {
    let n = (0, y.F)(e, D.A, v.A),
        { analyticsParams: i } = t;
    switch (n) {
        case m.Hf6.PLAY:
            return R(e.id, e, { analyticsParams: i });
        case m.Hf6.INSTALL:
            return U(e.id, e.branchId, i.source);
        case m.Hf6.UPDATE:
            return w(e.id, e.branchId);
    }
}
