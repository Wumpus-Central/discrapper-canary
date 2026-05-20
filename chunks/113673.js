"use strict";
n.r(t),
    n.d(t, {
        repairApplication: () => U,
        updateApplication: () => x,
        playApplication: () => v,
        installApplication: () => P,
        performDefaultLibraryApplicationAction: () => k,
    });
var i = n(92077),
    r = n(627968),
    s = n(64700),
    a = n(989349),
    o = n.n(a),
    l = n(17928),
    u = n(939249),
    c = n(935462),
    d = n(821609),
    _ = n(534514),
    f = n(192308),
    h = n(54827),
    p = n(780907),
    E = n(587895),
    m = n(235986),
    g = n(465797),
    A = n(174459),
    I = n(652215),
    T = n(375708),
    S = n(237846),
    N = n(818050);
class y extends s.PureComponent {
    onClose = () => {
        this.props.onClose();
    };
    handlePlay = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                { libraryApplication: i, analyticsParams: r } = e.props;
            e.onClose(), v(i.id, i, { analyticsParams: r, cloudSync: t, cloudSyncForceHash: n });
        };
    })();
    handleChooseDownload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === I.VX0.CONFLICT && this.handlePlay(!0, e.remote.hash);
    };
    handleChooseUpload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === I.VX0.CONFLICT && this.handlePlay(!0, e.next.hash);
    };
    renderConflictButton(e, t, n, i) {
        return (0, r.jsx)(u.D, {
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
                            (0, r.jsx)("div", { children: T.intl.string(T.t.gflHO6) }),
                            (0, r.jsx)("div", { className: S.vE, children: o()(t).calendar() }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                (0, r.jsxs)(c.$m, {
                    children: [
                        (0, r.jsx)(m.A, {
                            justify: m.A.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: S.aR }),
                        }),
                        (0, r.jsx)("div", {
                            className: S.h_,
                            children: T.intl.format(T.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.jl, {
                    children: (0, r.jsxs)(m.A, {
                        justify: m.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(d.$, {
                                variant: "secondary",
                                text: T.intl.string(T.t["ETE/oC"]),
                                onClick: this.onClose,
                            }),
                            (0, r.jsxs)(m.A, {
                                direction: m.A.Direction.HORIZONTAL,
                                justify: m.A.Justify.END,
                                children: [
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.ft,
                                        children: (0, r.jsx)(d.$, {
                                            variant: "secondary",
                                            text: T.intl.string(T.t["5911Lb"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, r.jsx)(d.$, {
                                        variant: "primary",
                                        text: T.intl.string(T.t["359Pbd"]),
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
        if (t.type !== I.VX0.CONFLICT) throw Error("Cannot render conflict for non conflict type");
        return (0, r.jsxs)(c.$m, {
            className: N.SX,
            children: [
                (0, r.jsx)("div", {
                    className: S.h_,
                    children: T.intl.format(T.t.eyXUP6, { applicationName: e.name }),
                }),
                this.renderConflictButton(
                    T.intl.string(T.t.AQUmkr),
                    t.remote.timestamp,
                    S.Mp,
                    this.handleChooseDownload,
                ),
                (0, r.jsxs)(m.A, {
                    className: S.Bu,
                    align: m.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", { className: S.cd }),
                        (0, r.jsx)("div", { className: S.WW, children: T.intl.string(T.t.WUsA2D) }),
                        (0, r.jsx)("div", { className: S.cd }),
                    ],
                }),
                this.renderConflictButton(T.intl.string(T.t.AXVwsw), t.next.timestamp, S.Hs, this.handleChooseUpload),
            ],
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === I.VX0.CONFLICT ? T.intl.string(T.t.oNbO1f) : T.intl.string(T.t.as4Tgg);
        return (0, r.jsxs)(c.EO, {
            transitionState: t,
            className: S.yl,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, r.jsxs)(c.rQ, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(c.s_, { className: S.b, onClick: this.onClose }),
                        (0, r.jsx)(_.D, { variant: "heading-lg/semibold", className: N.Gf, children: n }),
                    ],
                }),
                e.type === I.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
}
let C = l.Ay.connectStores([g.A, E.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return { cloudSyncState: g.A.getState(t.id, n), application: E.A.getApplication(t.id) };
})(y);
async function v(e, t, n) {
    let i = E.A.getApplication(e);
    if (null == i) return;
    let { cloudSync: s = !0, cloudSyncForceHash: a = null, analyticsParams: o } = n;
    if (s && null != t) {
        let e = t.branchId;
        try {
            await h.O(t.id, e, a);
        } catch (n) {
            (0, f.openModal)((n) => (0, r.jsx)(C, { libraryApplication: t, analyticsParams: o, branchId: e, ...n }));
            return;
        }
    }
    return (
        A.default.track(I.HAw.APPLICATION_OPENED, {
            application_id: i.id,
            application_name: i.name,
            type: I.UqL.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...o,
        }),
        p.Ay.launch({ applicationId: i.id, branchId: t?.branchId })
    );
}
var O = n(568004),
    R = n(227841),
    b = n(340829),
    D = n(966846),
    L = n(293066),
    w = n(775228);
function M(e, t, s, a, o) {
    let l = w.A.getInstallationPath(e.id, t),
        u = null != e.eulaId && !L.A.hasAcceptedEULA(e.eulaId);
    null == l || u
        ? (0, f.openModalLazy)(async () => {
              let { default: i } = await Promise.all([
                  n.e("98398"),
                  n.e("8516"),
                  n.e("19573"),
                  n.e("28866"),
                  n.e("34530"),
                  n.e("53729"),
                  n.e("52753"),
                  n.e("16061"),
              ]).then(n.bind(n, 125484));
              return (n) => (0, r.jsx)(i, { ...n, applicationId: e.id, branchId: t, analyticsLocation: o });
          })
        : (0, i.oc)({
              application: e,
              branchId: t,
              buildId: s,
              manifestIds: a,
              installationPath: l,
              analyticsLocation: o,
          });
}
function P(e, t, n) {
    let i = E.A.getApplication(e);
    if (null == i) return;
    let r = O.A.getTargetBuildId(i.id, t),
        s = O.A.getTargetManifests(i.id, t);
    null != r && null != s && null != M && M(i, t, r, s, n);
}
function x(e, t) {
    let n = E.A.getApplication(e);
    if (null != n) return i.K3(n, t, O.A.getTargetBuildId(n.id, t), O.A.getTargetManifests(n.id, t));
}
function U(e, t, n) {
    let r = E.A.getApplication(e);
    if (null != r) return i.qv(r, t, n);
}
function k(e, t) {
    let n = (0, R.F)(e, b.A, D.A),
        { analyticsParams: i } = t;
    switch (n) {
        case I.Hf6.PLAY:
            return v(e.id, e, { analyticsParams: i });
        case I.Hf6.INSTALL:
            return P(e.id, e.branchId, i.source);
        case I.Hf6.UPDATE:
            return x(e.id, e.branchId);
    }
}
