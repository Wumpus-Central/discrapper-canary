n.d(e, { a: () => S }), n(953529), n(415506), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(913527),
    o = n.n(l),
    a = n(442837),
    c = n(755721),
    s = n(481060),
    d = n(372123),
    u = n(224706),
    p = n(812206),
    h = n(600164),
    f = n(293245),
    y = n(626135),
    C = n(981631),
    O = n(388032),
    m = n(422622),
    g = n(197571);
function b(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function N(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                b(t, e, n[e]);
            });
    }
    return t;
}
class T extends r.PureComponent {
    renderConflictButton(t, e, n, r) {
        return (0, i.jsxs)(c.zx, {
            className: m.conflictButton,
            innerClassName: m.conflictButtonInner,
            onClick: r,
            children: [
                (0, i.jsx)("div", { className: n }),
                (0, i.jsxs)("div", {
                    className: m.buttonBody,
                    children: [
                        (0, i.jsx)("div", {
                            className: m.conflictTitle,
                            children: t,
                        }),
                        (0, i.jsx)("div", { children: O.intl.string(O.t.gflHOz) }),
                        (0, i.jsx)("div", {
                            className: m.timestamp,
                            children: o()(e).calendar(),
                        }),
                    ],
                }),
            ],
        });
    }
    renderError() {
        let { application: t } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsxs)(s.hzk, {
                    children: [
                        (0, i.jsx)(h.Z, {
                            justify: h.Z.Justify.CENTER,
                            children: (0, i.jsx)("div", { className: m.errorArt }),
                        }),
                        (0, i.jsx)("div", {
                            className: m.description,
                            children: O.intl.format(O.t.RAaWyc, { applicationName: t.name }),
                        }),
                    ],
                }),
                (0, i.jsx)(s.mzw, {
                    children: (0, i.jsxs)(h.Z, {
                        justify: h.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(c.zx, {
                                className: m.linkButton,
                                size: m.linkButtonSize,
                                look: c.zx.Looks.LINK,
                                color: c.zx.Colors.PRIMARY,
                                onClick: this.onClose,
                                children: O.intl.string(O.t["ETE/oK"]),
                            }),
                            (0, i.jsxs)(h.Z, {
                                direction: h.Z.Direction.HORIZONTAL,
                                justify: h.Z.Justify.END,
                                children: [
                                    (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: m.retryButton,
                                        children: (0, i.jsx)(s.zxk, {
                                            variant: "secondary",
                                            text: O.intl.string(O.t["5911LS"]),
                                            onClick: () => this.handlePlay(),
                                        }),
                                    }),
                                    (0, i.jsx)(s.zxk, {
                                        variant: "primary",
                                        text: O.intl.string(O.t["359PbW"]),
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
        let { application: t, cloudSyncState: e } = this.props;
        if (e.type !== C.TzF.CONFLICT) throw Error("Cannot render conflict for non conflict type");
        return (0, i.jsxs)(s.hzk, {
            className: g.marginBottom20,
            children: [
                (0, i.jsx)("div", {
                    className: m.description,
                    children: O.intl.format(O.t.eyXUPz, { applicationName: t.name }),
                }),
                this.renderConflictButton(
                    O.intl.string(O.t.AQUmkp),
                    e.remote.timestamp,
                    m.conflictDownloadArt,
                    this.handleChooseDownload,
                ),
                (0, i.jsxs)(h.Z, {
                    className: m.choiceWrapper,
                    align: h.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)("div", { className: m.choiceLine }),
                        (0, i.jsx)("div", {
                            className: m.choiceTitle,
                            children: O.intl.string(O.t.WUsA2N),
                        }),
                        (0, i.jsx)("div", { className: m.choiceLine }),
                    ],
                }),
                this.renderConflictButton(
                    O.intl.string(O.t.AXVws7),
                    e.next.timestamp,
                    m.conflictUploadArt,
                    this.handleChooseUpload,
                ),
            ],
        });
    }
    render() {
        let { cloudSyncState: t, transitionState: e } = this.props,
            n = t.type === C.TzF.CONFLICT ? O.intl.string(O.t.oNbO1d) : O.intl.string(O.t.as4Tgo);
        return (0, i.jsxs)(s.Y0X, {
            transitionState: e,
            className: m.modal,
            "aria-label": n,
            parentComponent: "CloudSyncResolutionModal",
            children: [
                (0, i.jsxs)(s.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.olH, {
                            className: m.closeButton,
                            onClick: this.onClose,
                        }),
                        (0, i.jsx)(s.vwX, {
                            tag: "h2",
                            className: g.marginReset,
                            children: n,
                        }),
                    ],
                }),
                t.type === C.TzF.CONFLICT ? this.renderConflict() : this.renderError(),
            ],
        });
    }
    constructor(...t) {
        var e;
        super(...t),
            (e = this),
            b(this, "onClose", () => {
                this.props.onClose();
            }),
            b(this, "handlePlay", function () {
                let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { libraryApplication: i, analyticsParams: r } = e.props;
                e.onClose(),
                    S(i.id, i, {
                        analyticsParams: r,
                        cloudSync: t,
                        cloudSyncForceHash: n,
                    });
            }),
            b(this, "handleChooseDownload", () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.remote.hash);
            }),
            b(this, "handleChooseUpload", () => {
                let { cloudSyncState: t } = this.props;
                t.type === C.TzF.CONFLICT && this.handlePlay(!0, t.next.hash);
            });
    }
}
let A = a.ZP.connectStores([f.Z, p.Z], (t) => {
    let { libraryApplication: e, branchId: n } = t;
    return {
        cloudSyncState: f.Z.getState(e.id, n),
        application: p.Z.getApplication(e.id),
    };
})(T);
async function S(t, e, n) {
    let r = p.Z.getApplication(t);
    if (null == r) return;
    let { cloudSync: l = !0, cloudSyncForceHash: o = null, analyticsParams: a } = n;
    if (l && null != e) {
        let t = e.branchId;
        try {
            await d.Z(e.id, t, o);
        } catch (n) {
            (0, s.h7j)((n) =>
                (0, i.jsx)(
                    A,
                    N(
                        {
                            libraryApplication: e,
                            analyticsParams: a,
                            branchId: t,
                        },
                        n,
                    ),
                ),
            );
            return;
        }
    }
    return (
        y.default.track(
            C.rMx.APPLICATION_OPENED,
            N(
                {
                    application_id: r.id,
                    application_name: r.name,
                    type: C.q5t.LAUNCH,
                    distributor: null != e ? e.getDistributor() : null,
                },
                a,
            ),
        ),
        u.Z.launch({
            applicationId: r.id,
            branchId: null == e ? void 0 : e.branchId,
        })
    );
}
