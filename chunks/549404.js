n.d(e, {
    default: () => w,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    s = n(284009),
    o = n.n(s),
    l = n(189213),
    a = n(311907),
    c = n(314116),
    d = n(397927),
    p = n(73153),
    u = n(900686),
    h = n(917136),
    b = n(976910),
    f = n(670492),
    y = n(287809),
    g = n(975571),
    m = n(652215),
    O = n(985018),
    j = n(624102);

function x(t, e, n) {
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
let C = (t) => {
    var e, n;
    let { label: i, text: s, children: o } = t,
        l = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++)
                    (r = n[i]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (s[r] = t[r]);
                return s;
            }
            if (
                ((s = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.getOwnPropertyNames(t);
                    for (r = 0; r < s.length; r++)
                        (n = s[r]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
                    return i;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    (r = n[i]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (s[r] = t[r]);
            return s;
        })(t, ["label", "text", "children"]);
    return (0, r.jsxs)(
        "div",
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        }),
                    )),
                    r.forEach(function (e) {
                        x(t, e, n[e]);
                    });
            }
            return t;
        })(
            {
                className: j.jx,
            },
            l,
        )),
        (n = n =
            {
                children: [
                    (0, r.jsx)(d.Heading, {
                        variant: "heading-md/semibold",
                        children: i,
                    }),
                    null != s
                        ? (0, r.jsx)(d.Text, {
                              variant: "text-md/normal",
                              className: j.gt,
                              children: s,
                          })
                        : null,
                    (0, r.jsx)("div", {
                        children: o,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e),
    );
};
class P extends i.PureComponent {
    renderBackupCodesSection(t) {
        return (0, r.jsx)(C, {
            label: O.intl.string(O.t.qZZUy6),
            text: t,
            children: (0, r.jsx)(u.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () =>
                    p.h.dispatch({
                        type: "MFA_SEEN_BACKUP_CODE_PROMPT",
                    }),
                children: (0, r.jsx)(d.Button, {
                    variant: "active",
                    size: "sm",
                    text: O.intl.string(O.t.qZZUy6),
                }),
            }),
        });
    }
    renderPasskeyCTASection() {
        return b.A.hasCredentials
            ? null
            : (0, r.jsxs)(C, {
                  label: O.intl.string(O.t.xMDCHa),
                  text: O.intl.string(O.t.okgGTu),
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: j.gt,
                          children: O.intl.format(O.t.OeGXVv, {
                              learnMoreLink: g.A.getArticleURL(m.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, r.jsx)(d.Button, {
                          variant: "active",
                          size: "sm",
                          text: O.intl.string(O.t.NIFmCJ),
                          onClick: this.handleAddPasskey,
                      }),
                  ],
              });
    }
    render() {
        let { isTotp: t } = this.props;
        return t ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: t } = this.props;
        return (0, r.jsxs)(l.Modal, {
            onClose: () => this.handleCloseModal(O.intl.string(O.t.WJFPHJ)),
            transitionState: t,
            title: O.intl.string(O.t.Awk3Gw),
            subtitle: O.intl.format(O.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, r.jsx)(d.cGx, {
                    className: j.yF,
                }),
                this.renderBackupCodesSection(O.intl.format(O.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, r.jsx)(l.Modal, {
            onClose: () => this.handleCloseModal(O.intl.string(O.t.aoNIXB)),
            transitionState: t,
            title: O.intl.string(O.t["7wPZln"]),
            subtitle: O.intl.format(O.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(O.intl.format(O.t.p59QLQ, {})),
        });
    }
    constructor(...t) {
        super(...t),
            x(this, "handleCloseModal", async (t) => {
                let { onClose: e, hasSeenBackupPrompt: n } = this.props;
                n
                    ? await e()
                    : await (0, c.A)({
                          title: O.intl.string(O.t.mwVXnI),
                          confirmText: O.intl.string(O.t.MwSEoz),
                          cancelText: O.intl.string(O.t["ETE/oC"]),
                          onConfirm: () => {
                              p.h.dispatch({
                                  type: "MFA_SEEN_BACKUP_CODE_PROMPT",
                              }),
                                  e();
                          },
                          children: t,
                      });
            }),
            x(this, "handleAddPasskey", () => {
                this.props.onClose(), h.Mn();
            }),
            x(this, "getDownloadFileContents", () => {
                let t = this.props.backupCodes
                        .map((t) => {
                            let { consumed: e, code: n } = t;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(e ? "(".concat(O.intl.string(O.t["ycME+9"]), ")") : "");
                        })
                        .join("\r\n"),
                    e = O.intl.formatToPlainString(O.t["uYWwh/"], {
                        email: this.props.currentUser.email,
                    });
                return "".concat(e, "\r\n\r\n").concat(t);
            });
    }
}
let w = a.Ay.connectStores([y.default, f.A], () => {
    let t = y.default.getCurrentUser();
    return (
        o()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        {
            currentUser: t,
            backupCodes: f.A.getBackupCodes(),
            hasSeenBackupPrompt: f.A.hasSeenBackupPrompt,
        }
    );
})(P);
