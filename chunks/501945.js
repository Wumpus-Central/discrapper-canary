"use strict";
n.d(t, { L: () => v });
var r = n(627968),
    i = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(311907),
    l = n(862482),
    u = n(935462),
    c = n(821609),
    d = n(534514),
    _ = n(192308),
    f = n(54827),
    p = n(544420),
    h = n(587895),
    E = n(235986),
    m = n(465797),
    g = n(954571),
    A = n(652215),
    I = n(985018),
    T = n(237846),
    S = n(818050);
class y extends i.PureComponent {
    onClose = () => {
        this.props.onClose();
    };
    handlePlay = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                { libraryApplication: r, analyticsParams: i } = e.props;
            e.onClose(), v(r.id, r, { analyticsParams: i, cloudSync: t, cloudSyncForceHash: n });
        };
    })();
    handleChooseDownload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === A.VX0.CONFLICT && this.handlePlay(!0, e.remote.hash);
    };
    handleChooseUpload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === A.VX0.CONFLICT && this.handlePlay(!0, e.next.hash);
    };
    renderConflictButton(e, t, n, i) {
        return (0, r.jsxs)(l.$n, {
            className: T.fe,
            innerClassName: T.tm,
            onClick: i,
            children: [
                (0, r.jsx)("div", { className: n }),
                (0, r.jsxs)("div", {
                    className: T.fn,
                    children: [
                        (0, r.jsx)("div", { className: T.Pc, children: e }),
                        (0, r.jsx)("div", { children: I.intl.string(I.t.gflHO6) }),
                        (0, r.jsx)("div", { className: T.vE, children: a()(t).calendar() }),
                    ],
                }),
            ],
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsxs)(u.$m, {
                    children: [
                        (0, r.jsx)(E.A, {
                            justify: E.A.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: T.aR }),
                        }),
                        (0, r.jsx)("div", {
                            className: T.h_,
                            children: I.intl.format(I.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.jl, {
                    children: (0, r.jsxs)(E.A, {
                        justify: E.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(l.$n, {
                                className: T.$J,
                                size: T.UD,
                                look: l.$n.Looks.LINK,
                                color: l.$n.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: I.intl.string(I.t["ETE/oC"]),
                            }),
                            (0, r.jsxs)(E.A, {
                                direction: E.A.Direction.HORIZONTAL,
                                justify: E.A.Justify.END,
                                children: [
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.ft,
                                        children: (0, r.jsx)(c.$, {
                                            variant: "secondary",
                                            text: I.intl.string(I.t["5911Lb"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, r.jsx)(c.$, {
                                        variant: "primary",
                                        text: I.intl.string(I.t["359Pbd"]),
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
        if (t.type !== A.VX0.CONFLICT) throw Error("Cannot render conflict for non conflict type");
        return (0, r.jsxs)(u.$m, {
            className: S.SX,
            children: [
                (0, r.jsx)("div", {
                    className: T.h_,
                    children: I.intl.format(I.t.eyXUP6, { applicationName: e.name }),
                }),
                this.renderConflictButton(
                    I.intl.string(I.t.AQUmkr),
                    t.remote.timestamp,
                    T.Mp,
                    this.handleChooseDownload,
                ),
                (0, r.jsxs)(E.A, {
                    className: T.Bu,
                    align: E.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", { className: T.cd }),
                        (0, r.jsx)("div", { className: T.WW, children: I.intl.string(I.t.WUsA2D) }),
                        (0, r.jsx)("div", { className: T.cd }),
                    ],
                }),
                this.renderConflictButton(I.intl.string(I.t.AXVwsw), t.next.timestamp, T.Hs, this.handleChooseUpload),
            ],
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === A.VX0.CONFLICT ? I.intl.string(I.t.oNbO1f) : I.intl.string(I.t.as4Tgg);
        return (0, r.jsxs)(u.EO, {
            transitionState: t,
            className: T.yl,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, r.jsxs)(u.rQ, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(u.s_, { className: T.b, onClick: this.onClose }),
                        (0, r.jsx)(d.D, { variant: "heading-lg/semibold", className: S.Gf, children: n }),
                    ],
                }),
                e.type === A.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
}
let N = o.Ay.connectStores([m.A, h.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return { cloudSyncState: m.A.getState(t.id, n), application: h.A.getApplication(t.id) };
})(y);
async function v(e, t, n) {
    let i = h.A.getApplication(e);
    if (null == i) return;
    let { cloudSync: s = !0, cloudSyncForceHash: a = null, analyticsParams: o } = n;
    if (s && null != t) {
        let e = t.branchId;
        try {
            await f.O(t.id, e, a);
        } catch (n) {
            (0, _.openModal)((n) => (0, r.jsx)(N, { libraryApplication: t, analyticsParams: o, branchId: e, ...n }));
            return;
        }
    }
    return (
        g.default.track(A.HAw.APPLICATION_OPENED, {
            application_id: i.id,
            application_name: i.name,
            type: A.UqL.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...o,
        }),
        p.Ay.launch({ applicationId: i.id, branchId: t?.branchId })
    );
}
