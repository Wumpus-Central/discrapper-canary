n.d(t, { a: () => T }), n(953529), n(415506), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(372123),
    d = n(224706),
    f = n(812206),
    _ = n(600164),
    p = n(293245),
    h = n(626135),
    m = n(981631),
    g = n(388032),
    E = n(422622),
    b = n(197571);
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
class v extends i.PureComponent {
    renderConflictButton(e, t, n, i) {
        return (0, r.jsxs)(l.zx, {
            className: E.conflictButton,
            innerClassName: E.conflictButtonInner,
            onClick: i,
            children: [
                (0, r.jsx)("div", { className: n }),
                (0, r.jsxs)("div", {
                    className: E.buttonBody,
                    children: [
                        (0, r.jsx)("div", {
                            className: E.conflictTitle,
                            children: e,
                        }),
                        (0, r.jsx)("div", { children: g.intl.string(g.t.gflHO6) }),
                        (0, r.jsx)("div", {
                            className: E.timestamp,
                            children: o()(t).calendar(),
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
                (0, r.jsxs)(c.hzk, {
                    children: [
                        (0, r.jsx)(_.Z, {
                            justify: _.Z.Justify.CENTER,
                            children: (0, r.jsx)("div", { className: E.errorArt }),
                        }),
                        (0, r.jsx)("div", {
                            className: E.description,
                            children: g.intl.format(g.t.RAaWyc, { applicationName: e.name }),
                        }),
                    ],
                }),
                (0, r.jsx)(c.mzw, {
                    children: (0, r.jsxs)(_.Z, {
                        justify: _.Z.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(l.zx, {
                                className: E.linkButton,
                                size: E.linkButtonSize,
                                look: l.zx.Looks.LINK,
                                color: l.zx.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: g.intl.string(g.t["ETE/oC"]),
                            }),
                            (0, r.jsxs)(_.Z, {
                                direction: _.Z.Direction.HORIZONTAL,
                                justify: _.Z.Justify.END,
                                children: [
                                    (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: E.retryButton,
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
        if (t.type !== m.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
        return (0, r.jsxs)(c.hzk, {
            className: b.marginBottom20,
            children: [
                (0, r.jsx)("div", {
                    className: E.description,
                    children: g.intl.format(g.t.eyXUP6, { applicationName: e.name }),
                }),
                this.renderConflictButton(
                    g.intl.string(g.t.AQUmkr),
                    t.remote.timestamp,
                    E.conflictDownloadArt,
                    this.handleChooseDownload,
                ),
                (0, r.jsxs)(_.Z, {
                    className: E.choiceWrapper,
                    align: _.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)("div", { className: E.choiceLine }),
                        (0, r.jsx)("div", {
                            className: E.choiceTitle,
                            children: g.intl.string(g.t.WUsA2D),
                        }),
                        (0, r.jsx)("div", { className: E.choiceLine }),
                    ],
                }),
                this.renderConflictButton(
                    g.intl.string(g.t.AXVwsw),
                    t.next.timestamp,
                    E.conflictUploadArt,
                    this.handleChooseUpload,
                ),
            ],
        });
    }
    render() {
        let { cloudSyncState: e, transitionState: t } = this.props,
            n = e.type === m.TzF.CONFLICT ? g.intl.string(g.t.oNbO1f) : g.intl.string(g.t.as4Tgg);
        return (0, r.jsxs)(c.Y0X, {
            transitionState: t,
            className: E.modal,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    children: [
                        (0, r.jsx)(c.olH, {
                            className: E.closeButton,
                            onClick: this.onClose,
                        }),
                        (0, r.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            className: b.marginReset,
                            children: n,
                        }),
                    ],
                }),
                e.type === m.TzF.CONFLICT ? this.renderConflict() : this.renderError(),
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
                    T(r.id, r, {
                        analyticsParams: i,
                        cloudSync: e,
                        cloudSyncForceHash: n,
                    });
            }),
            y(this, "handleChooseDownload", () => {
                let { cloudSyncState: e } = this.props;
                e.type === m.TzF.CONFLICT && this.handlePlay(!0, e.remote.hash);
            }),
            y(this, "handleChooseUpload", () => {
                let { cloudSyncState: e } = this.props;
                e.type === m.TzF.CONFLICT && this.handlePlay(!0, e.next.hash);
            });
    }
}
let I = s.ZP.connectStores([p.Z, f.Z], (e) => {
    let { libraryApplication: t, branchId: n } = e;
    return {
        cloudSyncState: p.Z.getState(t.id, n),
        application: f.Z.getApplication(t.id),
    };
})(v);
async function T(e, t, n) {
    let i = f.Z.getApplication(e);
    if (null == i) return;
    let { cloudSync: a = !0, cloudSyncForceHash: o = null, analyticsParams: s } = n;
    if (a && null != t) {
        let e = t.branchId;
        try {
            await u.Z(t.id, e, o);
        } catch (n) {
            (0, c.h7j)((n) =>
                (0, r.jsx)(
                    I,
                    O(
                        {
                            libraryApplication: t,
                            analyticsParams: s,
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
            m.rMx.APPLICATION_OPENED,
            O(
                {
                    application_id: i.id,
                    application_name: i.name,
                    type: m.q5t.LAUNCH,
                    distributor: null != t ? t.getDistributor() : null,
                },
                s,
            ),
        ),
        d.Z.launch({
            applicationId: i.id,
            branchId: null == t ? void 0 : t.branchId,
        })
    );
}
