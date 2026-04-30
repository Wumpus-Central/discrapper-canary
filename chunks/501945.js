"use strict";
n.d(t, { L: () => R });
var i = n(627968),
    r = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(17928),
    l = n(862482),
    _ = n(935462),
    d = n(821609),
    u = n(534514),
    c = n(192308),
    E = n(54827),
    h = n(780907),
    m = n(587895),
    f = n(235986),
    g = n(465797),
    A = n(954571),
    I = n(652215),
    p = n(985018),
    T = n(237846),
    S = n(818050);
class N extends r.PureComponent {
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
        e.type === I.VX0.CONFLICT && this.handlePlay(!0, e.remote.hash);
    };
    handleChooseUpload = () => {
        let { cloudSyncState: e } = this.props;
        e.type === I.VX0.CONFLICT && this.handlePlay(!0, e.next.hash);
    };
    renderConflictButton(e, t, n, r) {
        return (0, i.jsxs)(l.$n, {
            className: T.fe,
            innerClassName: T.tm,
            onClick: r,
            children: [
                (0, i.jsx)("div", { className: n }),
                (0, i.jsxs)("div", {
                    className: T.fn,
                    children: [
                        (0, i.jsx)("div", { className: T.Pc, children: e }),
                        (0, i.jsx)("div", { children: p.intl.string(p.t.gflHO6) }),
                        (0, i.jsx)("div", { className: T.vE, children: a()(t).calendar() }),
                    ],
                }),
            ],
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsxs)(_.$m, {
                    children: [
                        (0, i.jsx)(f.A, {
                            justify: f.A.Justify.CENTER,
                            children: (0, i.jsx)("div", { className: T.aR }),
                        }),
                        (0, i.jsx)("div", {
                            className: T.h_,
                            children: p.intl.format(p.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, i.jsx)(_.jl, {
                    children: (0, i.jsxs)(f.A, {
                        justify: f.A.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(l.$n, {
                                className: T.$J,
                                size: T.UD,
                                look: l.$n.Looks.LINK,
                                color: l.$n.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: p.intl.string(p.t["ETE/oC"]),
                            }),
                            (0, i.jsxs)(f.A, {
                                direction: f.A.Direction.HORIZONTAL,
                                justify: f.A.Justify.END,
                                children: [
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.ft,
                                        children: (0, i.jsx)(d.$, {
                                            variant: "secondary",
                                            text: p.intl.string(p.t["5911Lb"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, i.jsx)(d.$, {
                                        variant: "primary",
                                        text: p.intl.string(p.t["359Pbd"]),
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
        return (0, i.jsxs)(_.$m, {
            className: S.SX,
            children: [
                (0, i.jsx)("div", {
                    className: T.h_,
                    children: p.intl.format(p.t.eyXUP6, { applicationName: e.name }),
                }),
                this.renderConflictButton(
                    p.intl.string(p.t.AQUmkr),
                    t.remote.timestamp,
                    T.Mp,
                    this.handleChooseDownload,
                ),
                (0, i.jsxs)(f.A, {
                    className: T.Bu,
                    align: f.A.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", { className: T.cd }),
                        (0, i.jsx)("div", { className: T.WW, children: p.intl.string(p.t.WUsA2D) }),
                        (0, i.jsx)("div", { className: T.cd }),
                    ],
                }),
                this.renderConflictButton(p.intl.string(p.t.AXVwsw), t.next.timestamp, T.Hs, this.handleChooseUpload),
            ],
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === I.VX0.CONFLICT ? p.intl.string(p.t.oNbO1f) : p.intl.string(p.t.as4Tgg);
        return (0, i.jsxs)(_.EO, {
            transitionState: t,
            className: T.yl,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, i.jsxs)(_.rQ, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(_.s_, { className: T.b, onClick: this.onClose }),
                        (0, i.jsx)(u.D, { variant: "heading-lg/semibold", className: S.Gf, children: n }),
                    ],
                }),
                e.type === I.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
}
let O = o.Ay.connectStores([g.A, m.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return { cloudSyncState: g.A.getState(t.id, n), application: m.A.getApplication(t.id) };
})(N);
async function R(e, t, n) {
    let r = m.A.getApplication(e);
    if (null == r) return;
    let { cloudSync: s = !0, cloudSyncForceHash: a = null, analyticsParams: o } = n;
    if (s && null != t) {
        let e = t.branchId;
        try {
            await E.O(t.id, e, a);
        } catch (n) {
            (0, c.openModal)((n) => (0, i.jsx)(O, { libraryApplication: t, analyticsParams: o, branchId: e, ...n }));
            return;
        }
    }
    return (
        A.default.track(I.HAw.APPLICATION_OPENED, {
            application_id: r.id,
            application_name: r.name,
            type: I.UqL.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...o,
        }),
        h.Ay.launch({ applicationId: r.id, branchId: t?.branchId })
    );
}
