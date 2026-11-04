n.d(t, { oc: () => U, GD: () => x, playApplication: () => R, qv: () => G, K3: () => w });
var i = n(92077),
    r = n(477900),
    a = n(582128),
    s = n(536637),
    l = n.n(s),
    o = n(855986),
    d = n(935462),
    c = n(939249),
    u = n(821609),
    _ = n(534514),
    E = n(192308),
    A = n(54827),
    h = n(273626),
    f = n(587895),
    I = n(235986),
    p = n(465797),
    m = n(129230),
    T = n(652215),
    g = n(792996),
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
            (e.onClose(), R(i.id, i, { analyticsParams: r, cloudSync: t, cloudSyncForceHash: n }));
        };
    })();
    handleChooseDownload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === T.VX0.CONFLICT && this.handlePlay(!0, e.remote.hash);
    };
    handleChooseUpload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === T.VX0.CONFLICT && this.handlePlay(!0, e.next.hash);
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
                        (0, r.jsx)(I.A, {
                            justify: I.A.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: S.aR }),
                        }),
                        (0, r.jsx)("div", {
                            className: S.h_,
                            children: g.intl.format(g.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(d.jl, {
                    children: (0, r.jsxs)(I.A, {
                        justify: I.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(u.$, {
                                variant: "secondary",
                                text: g.intl.string(g.t["ETE/oC"]),
                                onClick: this.onClose,
                            }),
                            (0, r.jsxs)(I.A, {
                                direction: I.A.Direction.HORIZONTAL,
                                justify: I.A.Justify.END,
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
        if (t.type !== T.VX0.CONFLICT) throw Error("Cannot render conflict for non conflict type");
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
                (0, r.jsxs)(I.A, {
                    className: S.Bu,
                    align: I.A.Align.CENTER,
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
            n = e.type === T.VX0.CONFLICT ? g.intl.string(g.t.oNbO1f) : g.intl.string(g.t.as4Tgg);
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
                e.type === T.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
}
let O = o.Ay.connectStores([p.A, f.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return { cloudSyncState: p.A.getState(t.id, n), application: f.A.getApplication(t.id) };
})(C);
async function R(e, t, n) {
    let i = f.A.getApplication(e);
    if (null == i) return;
    let { cloudSync: a = !0, cloudSyncForceHash: s = null, analyticsParams: l } = n;
    if (a && null != t) {
        let e = t.branchId;
        try {
            await A.O(t.id, e, s);
        } catch (n) {
            (0, E.qf)((n) => (0, r.jsx)(O, { libraryApplication: t, analyticsParams: l, branchId: e, ...n }));
            return;
        }
    }
    return (
        m.default.track(T.HAw.APPLICATION_OPENED, {
            application_id: i.id,
            application_name: i.name,
            type: T.UqL.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...l,
        }),
        h.A.launchGame({ applicationId: i.id, branchId: t?.branchId })
    );
}
var L = n(568004),
    y = n(227841),
    D = n(659096),
    b = n(966846),
    v = n(293066),
    P = n(775228);
function M(e, t, a, s, l) {
    let o = P.A.getInstallationPath(e.id, t),
        d = null != e.eulaId && !v.A.hasAcceptedEULA(e.eulaId);
    null == o || d
        ? (0, E.mM)(async () => {
              let { default: i } = await Promise.all([
                  n.e(668756),
                  n.e(505866),
                  n.e(329477),
                  n.e(508702),
                  n.e(990189),
                  n.e(253729),
                  n.e(44561),
                  n.e(490028),
                  n.e(234236),
                  n.e(76705),
                  n.e(652753),
                  n.e(55938),
              ]).then(n.bind(n, 357465));
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
    let i = f.A.getApplication(e);
    if (null == i) return;
    let r = L.A.getTargetBuildId(i.id, t),
        a = L.A.getTargetManifests(i.id, t);
    null != r && null != a && null != M && M(i, t, r, a, n);
}
function w(e, t) {
    let n = f.A.getApplication(e);
    if (null != n) return i.K3(n, t, L.A.getTargetBuildId(n.id, t), L.A.getTargetManifests(n.id, t));
}
function G(e, t, n) {
    let r = f.A.getApplication(e);
    if (null != r) return i.qv(r, t, n);
}
function x(e, t) {
    let n = (0, y.F)(e, D.A, b.A),
        { analyticsParams: i } = t;
    switch (n) {
        case T.Hf6.PLAY:
            return R(e.id, e, { analyticsParams: i });
        case T.Hf6.INSTALL:
            return U(e.id, e.branchId, i.source);
        case T.Hf6.UPDATE:
            return w(e.id, e.branchId);
    }
}
