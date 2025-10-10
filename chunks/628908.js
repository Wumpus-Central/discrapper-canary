r.d(t, { default: () => k }), r(388685);
var n = r(951288),
    s = r(647438),
    i = r(512722),
    o = r.n(i),
    a = r(442837),
    l = r(481060),
    c = r(570140),
    d = r(23645),
    h = r(600164),
    p = r(454585),
    u = r(365007),
    m = r(15980),
    f = r(325067),
    x = r(594174),
    b = r(63063),
    j = r(981631),
    C = r(388032),
    g = r(505198);
function y(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let O = (e) => {
    var t,
        r,
        { label: s, text: i, children: o } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        s = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                    return s;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
            }
            return s;
        })(e, ["label", "text", "children"]);
    return (0, n.jsxs)(
        h.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        y(e, t, r[t]);
                    });
            }
            return e;
        })({ direction: h.Z.Direction.VERTICAL }, a)),
        (r = r =
            {
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: "heading-md/semibold",
                        children: s,
                    }),
                    null != i
                        ? (0, n.jsx)(l.Text, {
                              variant: "text-md/normal",
                              className: g.sectionBody,
                              children: i,
                          })
                        : null,
                    (0, n.jsx)(h.Z.Child, {
                        wrap: !0,
                        children: o,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
class P extends s.PureComponent {
    renderBackupCodesSection(e) {
        return (0, n.jsx)(O, {
            label: C.intl.string(C.t.qZZUy8),
            text: e,
            children: (0, n.jsx)(d.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => c.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, n.jsx)(l.zxk, {
                    variant: "active",
                    size: "sm",
                    text: C.intl.string(C.t.qZZUy8),
                }),
            }),
        });
    }
    renderPasskeyCTASection() {
        return m.Z.hasCredentials
            ? null
            : (0, n.jsxs)(O, {
                  label: C.intl.string(C.t.xMDCHR),
                  text: C.intl.string(C.t.okgGTk),
                  children: [
                      (0, n.jsx)(l.Text, {
                          variant: "text-md/normal",
                          className: g.sectionBody,
                          children: C.intl.format(C.t.OeGXVl, {
                              learnMoreLink: b.Z.getArticleURL(j.BhN.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, n.jsx)(l.zxk, {
                          variant: "active",
                          size: "sm",
                          text: C.intl.string(C.t.NIFmCA),
                          onClick: this.handleAddPasskey,
                      }),
                  ],
              });
    }
    renderHeader(e, t) {
        return (0, n.jsxs)(l.xBx, {
            separator: !1,
            children: [
                (0, n.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: "heading-lg/semibold",
                            className: g.header,
                            children: p.Z.parse(e),
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            className: g.subHeader,
                            children: t,
                        }),
                    ],
                }),
                (0, n.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, n.jsx)(l.olH, { onClick: this.handleCloseModal }),
                }),
            ],
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, n.jsx)(l.sYh, {
            dismissable: !0,
            header: C.intl.string(C.t.mwVXnJ),
            confirmText: C.intl.string(C.t.MwSEo6),
            cancelText: C.intl.string(C.t["ETE/oK"]),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                c.Z.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), t();
            },
            children: (0, n.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: e,
            }),
        });
    }
    render() {
        let { isTotp: e } = this.props;
        return e ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, n.jsxs)(l.Y0X, {
            transitionState: e,
            className: g.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(C.intl.string(C.t["681MPT"]), C.intl.format(C.t["/Nhi8f"], {})),
                (0, n.jsxs)(l.hzk, {
                    className: g.modalInner,
                    children: [
                        this.renderPasskeyCTASection(),
                        (0, n.jsx)(l.izJ, { className: g.divider }),
                        this.renderBackupCodesSection(C.intl.format(C.t.M0Dogo, {})),
                    ],
                }),
                t && this.renderConfirmModal(C.intl.string(C.t.WJFPHB)),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, n.jsxs)(l.Y0X, {
            transitionState: e,
            className: g.modal,
            parentComponent: "MFAEnableSuccess",
            children: [
                this.renderHeader(C.intl.string(C.t.x6ielJ), C.intl.format(C.t["/Nhi8f"], {})),
                (0, n.jsx)(l.hzk, {
                    className: g.modalInner,
                    children: this.renderBackupCodesSection(C.intl.format(C.t.p59QLS, {})),
                }),
                t && this.renderConfirmModal(C.intl.string(C.t.aoNIXF)),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            y(this, "state", { showConfirmModal: !1 }),
            y(this, "handleCloseModal", () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? e() : this.setState({ showConfirmModal: !0 });
            }),
            y(this, "handleAddPasskey", () => {
                this.props.onClose(), u.ef();
            }),
            y(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: r } = e;
                            return "* "
                                .concat(r.substr(0, 4), "-")
                                .concat(r.substr(4), " ")
                                .concat(t ? "(".concat(C.intl.string(C.t["ycME+/"]), ")") : "");
                        })
                        .join("\r\n"),
                    t = C.intl.formatToPlainString(C.t.uYWwh4, { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            });
    }
}
let k = a.ZP.connectStores([x.default, f.Z], () => {
    let e = x.default.getCurrentUser();
    return (
        o()(null != e, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: e,
            backupCodes: f.Z.getBackupCodes(),
            hasSeenBackupPrompt: f.Z.hasSeenBackupPrompt,
        }
    );
})(P);
