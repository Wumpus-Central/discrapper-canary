n.d(t, { L: () => S }), n(228524), n(65821), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(54827),
    d = n(544420),
    f = n(587895),
    p = n(235986),
    _ = n(465797),
    h = n(954571),
    m = n(652215),
    g = n(985018),
    E = n(535217),
    b = n(473169);
function y(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
class A extends i.PureComponent {
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
                        (0, r.jsx)("div", {
                            className: E.Pc,
                            children: e,
                        }),
                        (0, r.jsx)("div", { children: g.intl.string(g.t.gflHO6) }),
                        (0, r.jsx)("div", {
                            className: E.vE,
                            children: s()(t).calendar(),
                        }),
                    ],
                }),
            ],
        });
    }
    renderError() {
        let { application: e } = this.props;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsxs)(c.$mQ, {
                    children: [
                        (0, r.jsx)(p.A, {
                            justify: p.A.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: E.aR }),
                        }),
                        (0, r.jsx)("div", {
                            className: E.h_,
                            children: g.intl.format(g.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.jlY, {
                    children: (0, r.jsxs)(p.A, {
                        justify: p.A.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(l.$n, {
                                className: E.$J,
                                size: E.UD,
                                look: l.$n.Looks.LINK,
                                color: l.$n.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, r.jsxs)(p.A, {
                                direction: p.A.Direction.HORIZONTAL,
                                justify: p.A.Justify.END,
                                children: [
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: E.ft,
                                        children: (0, r.jsx)(c.Button, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t["5911Lb"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, r.jsx)(c.Button, {
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
        return (0, r.jsxs)(c.$mQ, {
            className: b.SX,
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
                (0, r.jsxs)(p.A, {
                    className: E.Bu,
                    align: p.A.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", { className: E.cd }),
                        (0, r.jsx)("div", {
                            className: E.WW,
                            children: g.intl.string(g.t.WUsA2D),
                        }),
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
        return (0, r.jsxs)(c.EOs, {
            transitionState: t,
            className: E.yl,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, r.jsxs)(c.rQ0, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(c.s_y, {
                            className: E.b,
                            onClick: this.onClose,
                        }),
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: b.Gf,
                            children: n,
                        }),
                    ],
                }),
                e.type === m.VX0.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            y(this, "onClose", () => {
                this.props.onClose();
            }),
            y(this, "handlePlay", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: r, analyticsParams: i } = t.props;
                t.onClose(),
                    S(r.id, r, {
                        analyticsParams: i,
                        cloudSync: e,
                        cloudSyncForceHash: n,
                    });
            }),
            y(this, "handleChooseDownload", () => {
                let { cloudSyncState: e } = this.props;
                e.type === m.VX0.CONFLICT && this.handlePlay(!0, e.remote.hash);
            }),
            y(this, "handleChooseUpload", () => {
                let { cloudSyncState: e } = this.props;
                e.type === m.VX0.CONFLICT && this.handlePlay(!0, e.next.hash);
            });
    }
}
let v = o.Ay.connectStores([_.A, f.A], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return {
        cloudSyncState: _.A.getState(t.id, n),
        application: f.A.getApplication(t.id),
    };
})(A);
async function S(e, t, n) {
    let i = f.A.getApplication(e);
    if (null == i) return;
    let { cloudSync: a = !0, cloudSyncForceHash: s = null, analyticsParams: o } = n;
    if (a && null != t) {
        let e = t.branchId;
        try {
            await u.O(t.id, e, s);
        } catch (n) {
            (0, c.qfG)((n) =>
                (0, r.jsx)(
                    v,
                    O(
                        {
                            libraryApplication: t,
                            analyticsParams: o,
                            branchId: e,
                        },
                        n,
                    ),
                ),
            );
            return;
        }
    }
    return (
        h.default.track(
            m.HAw.APPLICATION_OPENED,
            O(
                {
                    application_id: i.id,
                    application_name: i.name,
                    type: m.UqL.LAUNCH,
                    distributor: null != t ? t.getDistributor() : null,
                },
                o,
            ),
        ),
        d.A.launch({
            applicationId: i.id,
            branchId: null == t ? void 0 : t.branchId,
        })
    );
}
