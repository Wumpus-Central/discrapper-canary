n.d(e, { default: () => _ });
var s = n(477900),
    i = n(582128),
    r = n(284009),
    l = n.n(r),
    a = n(17928),
    o = n(314116),
    d = n(189213),
    c = n(297264),
    h = n(834730),
    u = n(821609),
    p = n(404778),
    C = n(228366),
    m = n(900686),
    x = n(976910),
    g = n(665671),
    A = n(670492),
    k = n(287809),
    P = n(975571),
    b = n(652215),
    S = n(375708),
    T = n(478516);
function f(t) {
    let { label: e, text: n, children: i, ...r } = t;
    return (0, s.jsxs)("div", {
        className: T.jx,
        ...r,
        children: [
            (0, s.jsx)(c.D, { variant: "heading-md/semibold", children: e }),
            null != n ? (0, s.jsx)(h.E, { variant: "text-md/normal", className: T.gt, children: n }) : null,
            (0, s.jsx)("div", { children: i }),
        ],
    });
}
class j extends i.PureComponent {
    handleCloseModal = async (t) => {
        let { onClose: e, hasSeenBackupPrompt: n } = this.props;
        n
            ? await e()
            : await (0, o.A)({
                  title: S.intl.string(S.t.mwVXnI),
                  confirmText: S.intl.string(S.t.MwSEoz),
                  cancelText: S.intl.string(S.t["ETE/oC"]),
                  onConfirm: () => {
                      (C.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }), e());
                  },
                  children: t,
              });
    };
    renderBackupCodesSection(t) {
        return (0, s.jsx)(f, {
            label: S.intl.string(S.t.qZZUy6),
            text: t,
            children: (0, s.jsx)(m.A, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                onDownload: () => C.h.dispatch({ type: "MFA_SEEN_BACKUP_CODE_PROMPT" }),
                children: (0, s.jsx)(u.$, { variant: "active", size: "sm", text: S.intl.string(S.t.qZZUy6) }),
            }),
        });
    }
    handleAddPasskey = () => {
        (this.props.onClose(), (0, g.A)());
    };
    renderPasskeyCTASection() {
        return x.A.hasCredentials
            ? null
            : (0, s.jsxs)(f, {
                  label: S.intl.string(S.t.xMDCHa),
                  text: S.intl.string(S.t.okgGTu),
                  children: [
                      (0, s.jsx)(h.E, {
                          variant: "text-md/normal",
                          className: T.gt,
                          children: S.intl.format(S.t.OeGXVv, {
                              learnMoreLink: P.A.getArticleURL(b.MVz.SETTING_UP_TWO_FACTOR),
                          }),
                      }),
                      (0, s.jsx)(u.$, {
                          variant: "active",
                          size: "sm",
                          text: S.intl.string(S.t.NIFmCJ),
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
        return (0, s.jsxs)(d.a, {
            onClose: () => this.handleCloseModal(S.intl.string(S.t.WJFPHJ)),
            transitionState: t,
            title: S.intl.string(S.t.Awk3Gw),
            subtitle: S.intl.format(S.t["/Nhi8R"], {}),
            actions: [],
            children: [
                this.renderPasskeyCTASection(),
                (0, s.jsx)(p.c, { className: T.yF }),
                this.renderBackupCodesSection(S.intl.format(S.t.M0Dogh, {})),
            ],
        });
    }
    renderWebAuthn() {
        let { transitionState: t } = this.props;
        return (0, s.jsx)(d.a, {
            onClose: () => this.handleCloseModal(S.intl.string(S.t.aoNIXB)),
            transitionState: t,
            title: S.intl.string(S.t["7wPZln"]),
            subtitle: S.intl.format(S.t["/Nhi8R"], {}),
            actions: [],
            children: this.renderBackupCodesSection(S.intl.format(S.t.p59QLQ, {})),
        });
    }
    getDownloadFileContents = () => {
        let t = this.props.backupCodes
                .map((t) => {
                    let { consumed: e, code: n } = t;
                    return `* ${n.substr(0, 4)}-${n.substr(4)} ${e ? `(${S.intl.string(S.t["ycME+9"])})` : ""}`;
                })
                .join("\r\n"),
            e = S.intl.formatToPlainString(S.t["uYWwh/"], { email: this.props.currentUser.email });
        return `${e}\r
\r
${t}`;
    };
}
let _ = a.Ay.connectStores([k.default, A.A], () => {
    let t = k.default.getCurrentUser();
    return (
        l()(null != t, "MFAEnableSuccess: currentUser cannot be undefined"),
        { currentUser: t, backupCodes: A.A.getBackupCodes(), hasSeenBackupPrompt: A.A.hasSeenBackupPrompt }
    );
})(j);
