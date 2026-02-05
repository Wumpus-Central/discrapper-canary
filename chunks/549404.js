"use strict";
n.d(e, { default: () => v });
var r = n(627968),
    i = n(64700),
    o = n(284009),
    a = n.n(o),
    s = n(189213),
    l = n(311907),
    c = n(314116),
    d = n(397927),
    u = n(73153),
    f = n(900686),
    p = n(917136),
    h = n(976910),
    m = n(670492),
    S = n(287809),
    g = n(975571),
    w = n(652215),
    y = n(985018),
    C = n(624102);
let E = (t) => {
    let { label: e, text: n, children: i, ...o } = t;
    return (0, r.jsxs)("div", {
        className: C.jx,
        ...o,
        children: [
            (0, r.jsx)(d.Heading, { variant: "heading-md/semibold", children: e }),
            null != n ? (0, r.jsx)(d.Text, { variant: "text-md/normal", className: C.gt, children: n }) : null,
            (0, r.jsx)("div", { children: i }),
        ],
    });
};
class A extends i.PureComponent {
    handleCloseModal = async (t) => {
        let { onClose: e, hasSeenBackupPrompt: n } = this.props;
        n
            ? await e()
            : await (0, c.A)({
                  title: y.intl.string(y.t.mwVXnI),
                  confirmText: y.intl.string(y.t.MwSEoz),
                  cancelText: y.intl.string(y.t["ETE/oC"]),
                  onConfirm: () => {
                      u.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e();
                  },
                  children: t,
              });
    };
    renderBackupCodesSection(t) {
        return (0, r.jsx)(E, {
            label: y.intl.string(y.t.qZZUy6),
            text: t,
            children: (0, r.jsx)(f.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => u.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, r.jsx)(d.Button, { variant: "active", size: "sm", text: y.intl.string(y.t.qZZUy6) }),
            }),
        });
    }
    handleAddPasskey = () => {
        this.props.onClose(), p.Mn();
    };
    renderPasskeyCTASection() {
        return h.A.hasCredentials
            ? null
            : (0, r.jsxs)(E, {
                  label: y.intl.string(y.t.xMDCHa),
                  text: y.intl.string(y.t.okgGTu),
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          className: C.gt,
                          children: y.intl.format(y.t.OeGXVv, {
                              learnMoreLink: g.A.getArticleURL(w.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, r.jsx)(d.Button, {
                          variant: "active",
                          size: "sm",
                          text: y.intl.string(y.t.NIFmCJ),
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
        return (0, r.jsxs)(s.Modal, {
            onClose: () => this.handleCloseModal(y.intl.string(y.t.WJFPHJ)),
            transitionState: t,
            title: y.intl.string(y.t.Awk3Gw),
            subtitle: y.intl.format(y.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, r.jsx)(d.cGx, { className: C.yF }),
                this.renderBackupCodesSection(y.intl.format(y.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, r.jsx)(s.Modal, {
            onClose: () => this.handleCloseModal(y.intl.string(y.t.aoNIXB)),
            transitionState: t,
            title: y.intl.string(y.t["7wPZln"]),
            subtitle: y.intl.format(y.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(y.intl.format(y.t.p59QLQ, {})),
        });
    }
    getDownloadFileContents = () => {
        let t = this.props.backupCodes
                .map((t) => {
                    let { consumed: e, code: n } = t;
                    return `* ${n.substr(0, 4)}-${n.substr(4)} ${e ? `(${y.intl.string(y.t["ycME+9"])})` : ""}`;
                })
                .join("\r\n"),
            e = y.intl.formatToPlainString(y.t["uYWwh/"], { email: this.props.currentUser.email });
        return `${e}\r
\r
${t}`;
    };
}
let v = l.Ay.connectStores([S.default, m.A], () => {
    let t = S.default.getCurrentUser();
    return (
        a()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        { currentUser: t, backupCodes: m.A.getBackupCodes(), hasSeenBackupPrompt: m.A.hasSeenBackupPrompt }
    );
})(A);
