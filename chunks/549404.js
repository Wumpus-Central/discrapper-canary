n.d(e, { default: () => _ });
var s = n(627968),
    i = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(189213),
    o = n(17928),
    d = n(314116),
    c = n(534514),
    h = n(834730),
    p = n(821609),
    u = n(404778),
    C = n(228366),
    m = n(900686),
    x = n(976910),
    g = n(665671),
    A = n(670492),
    k = n(287809),
    P = n(975571),
    b = n(652215),
    M = n(375708),
    S = n(893709);
let T = (t) => {
    let { label: e, text: n, children: i, ...r } = t;
    return (0, s.jsxs)("div", {
        className: S.jx,
        ...r,
        children: [
            (0, s.jsx)(c.D, { variant: "heading-md/semibold", children: e }),
            null != n ? (0, s.jsx)(h.E, { variant: "text-md/normal", className: S.gt, children: n }) : null,
            (0, s.jsx)("div", { children: i }),
        ],
    });
};
class j extends i.PureComponent {
    handleCloseModal = async (t) => {
        let { onClose: e, hasSeenBackupPrompt: n } = this.props;
        n
            ? await e()
            : await (0, d.A)({
                  title: M.intl.string(M.t.mwVXnI),
                  confirmText: M.intl.string(M.t.MwSEoz),
                  cancelText: M.intl.string(M.t["ETE/oC"]),
                  onConfirm: () => {
                      C.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e();
                  },
                  children: t,
              });
    };
    renderBackupCodesSection(t) {
        return (0, s.jsx)(T, {
            label: M.intl.string(M.t.qZZUy6),
            text: t,
            children: (0, s.jsx)(m.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => C.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, s.jsx)(p.$, { variant: "active", size: "sm", text: M.intl.string(M.t.qZZUy6) }),
            }),
        });
    }
    handleAddPasskey = () => {
        this.props.onClose(), (0, g.A)();
    };
    renderPasskeyCTASection() {
        return x.A.hasCredentials
            ? null
            : (0, s.jsxs)(T, {
                  label: M.intl.string(M.t.xMDCHa),
                  text: M.intl.string(M.t.okgGTu),
                  children: [
                      (0, s.jsx)(h.E, {
                          variant: "text-md/normal",
                          className: S.gt,
                          children: M.intl.format(M.t.OeGXVv, {
                              learnMoreLink: P.A.getArticleURL(b.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, s.jsx)(p.$, {
                          variant: "active",
                          size: "sm",
                          text: M.intl.string(M.t.NIFmCJ),
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
        return (0, s.jsxs)(a.Modal, {
            onClose: () => this.handleCloseModal(M.intl.string(M.t.WJFPHJ)),
            transitionState: t,
            title: M.intl.string(M.t.Awk3Gw),
            subtitle: M.intl.format(M.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, s.jsx)(u.c, { className: S.yF }),
                this.renderBackupCodesSection(M.intl.format(M.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, s.jsx)(a.Modal, {
            onClose: () => this.handleCloseModal(M.intl.string(M.t.aoNIXB)),
            transitionState: t,
            title: M.intl.string(M.t["7wPZln"]),
            subtitle: M.intl.format(M.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(M.intl.format(M.t.p59QLQ, {})),
        });
    }
    getDownloadFileContents = () => {
        let t = this.props.backupCodes
                .map((t) => {
                    let { consumed: e, code: n } = t;
                    return `* ${n.substr(0, 4)}-${n.substr(4)} ${e ? `(${M.intl.string(M.t["ycME+9"])})` : ""}`;
                })
                .join("\r\n"),
            e = M.intl.formatToPlainString(M.t["uYWwh/"], { email: this.props.currentUser.email });
        return `${e}\r
\r
${t}`;
    };
}
let _ = o.Ay.connectStores([k.default, A.A], () => {
    let t = k.default.getCurrentUser();
    return (
        l()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        { currentUser: t, backupCodes: A.A.getBackupCodes(), hasSeenBackupPrompt: A.A.hasSeenBackupPrompt }
    );
})(j);
