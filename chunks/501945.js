"use strict";
n.d(t, { L: () => y });
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    u = n(397927),
    c = n(54827),
    d = n(544420),
    _ = n(587895),
    f = n(235986),
    p = n(465797),
    h = n(954571),
    m = n(652215),
    g = n(985018),
    E = n(535217),
    A = n(473169);
class I extends i.PureComponent {
    onClose = () => {
        this.props.onClose();
    };
    handlePlay = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                { libraryApplication: r, analyticsParams: i } = e.props;
            e.onClose(), y(r.id, r, { analyticsParams: i, cloudSync: t, cloudSyncForceHash: n });
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
        return (0, r.jsxs)(l.$n, {
            className: E.fe,
            innerClassName: E.tm,
            onClick: i,
            children: [
                (0, r.jsx)("div", { className: n }),
                (0, r.jsxs)("div", {
                    className: E.fn,
                    children: [
                        (0, r.jsx)("div", { className: E.Pc, children: e }),
                        (0, r.jsx)("div", { children: g.intl.string(g.t.gflHO6) }),
                        (0, r.jsx)("div", { className: E.vE, children: s()(t).calendar() }),
                    ],
                }),
            ],
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsxs)(u.$mQ, {
                    children: [
                        (0, r.jsx)(f.A, {
                            justify: f.A.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: E.aR }),
                        }),
                        (0, r.jsx)("div", {
                            className: E.h_,
                            children: g.intl.format(g.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.jlY, {
                    children: (0, r.jsxs)(f.A, {
                        justify: f.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(l.$n, {
                                className: E.$J,
                                size: E.UD,
                                look: l.$n.Looks.LINK,
                                color: l.$n.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, r.jsxs)(f.A, {
                                direction: f.A.Direction.HORIZONTAL,
                                justify: f.A.Justify.END,
                                children: [
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: E.ft,
                                        children: (0, r.jsx)(u.Button, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t["5911Lb"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, r.jsx)(u.Button, {
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
        return (0, r.jsxs)(u.$mQ, {
            className: A.SX,
            children: [
                (0, r.jsx)("div", {
                    className: E.h_,
                    children: g.intl.format(g.t.eyXUP6, { applicationName: e.name }),
                }),
                this.renderConflictButton(
                    g.intl.string(g.t.AQUmkr),
                    t.remote.timestamp,
                    E.Mp,
                    this.handleChooseDownload,
                ),
                (0, r.jsxs)(f.A, {
                    className: E.Bu,
                    align: f.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", { className: E.cd }),
                        (0, r.jsx)("div", { className: E.WW, children: g.intl.string(g.t.WUsA2D) }),
                        (0, r.jsx)("div", { className: E.cd }),
                    ],
                }),
                this.renderConflictButton(g.intl.string(g.t.AXVwsw), t.next.timestamp, E.Hs, this.handleChooseUpload),
            ],
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === m.VX0.CONFLICT ? g.intl.string(g.t.oNbO1f) : g.intl.string(g.t.as4Tgg);
        return (0, r.jsxs)(u.EOs, {
            transitionState: t,
            className: E.yl,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, r.jsxs)(u.rQ0, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(u.s_y, { className: E.b, onClick: this.onClose }),
                        (0, r.jsx)(u.Heading, { variant: "heading-lg/semibold", className: A.Gf, children: n }),
                    ],
                }),
                e.type === m.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
}
let T = o.Ay.connectStores([p.A, _.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return { cloudSyncState: p.A.getState(t.id, n), application: _.A.getApplication(t.id) };
})(I);
async function y(e, t, n) {
    let i = _.A.getApplication(e);
    if (null == i) return;
    let { cloudSync: a = !0, cloudSyncForceHash: s = null, analyticsParams: o } = n;
    if (a && null != t) {
        let e = t.branchId;
        try {
            await c.O(t.id, e, s);
        } catch (n) {
            (0, u.qfG)((n) => (0, r.jsx)(T, { libraryApplication: t, analyticsParams: o, branchId: e, ...n }));
            return;
        }
    }
    return (
        h.default.track(m.HAw.APPLICATION_OPENED, {
            application_id: i.id,
            application_name: i.name,
            type: m.UqL.LAUNCH,
            distributor: null != t ? t.getDistributor() : null,
            ...o,
        }),
        d.A.launch({ applicationId: i.id, branchId: t?.branchId })
    );
}
