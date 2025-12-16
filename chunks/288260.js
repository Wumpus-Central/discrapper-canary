n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(755721),
    a = n(481060),
    o = n(809206),
    s = n(388032);
function l(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.SR, {
        dismissable: !0,
        header: s.intl.string(s.t.UNGZDI),
        confirmText: s.intl.string(s.t.BddRzS),
        confirmButtonColor: i.Tt.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.alpAUm),
        }),
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.SR, {
        dismissable: !0,
        header: s.intl.string(s.t.I5UrbV),
        confirmText: s.intl.string(s.t.BddRzS),
        confirmButtonColor: i.Tt.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.UyVVan),
        }),
    });
}
function u(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.SR, {
        dismissable: !0,
        header: s.intl.string(s.t["8lQ2rR"]),
        confirmText: s.intl.string(s.t["8lQ2rR"]),
        cancelText: s.intl.string(s.t["ETE/oC"]),
        onCancel: t,
        onConfirm: () => (0, o.ss)("", !0).then(t),
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: s.intl.string(s.t.FB4H1D),
        }),
    });
}
function d(e) {
    let { onClose: t, errorMessage: n } = e;
    return (0, r.jsx)(a.SR, {
        dismissable: !0,
        header: s.intl.string(s.t.LX0nT8),
        confirmText: s.intl.string(s.t.BddRzS),
        confirmButtonColor: i.Tt.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: n,
        }),
    });
}
function f(e) {
    let {
        shouldRenderOwnedTeamsModal: t,
        shouldRenderOwnedGuildsModal: n,
        shouldRenderDeleteAccountConfirmModal: i,
        shouldRenderDisableAccountErrorModal: a,
        disableAccountErrorMessage: o,
        onOwnedTeamsWarningModalClose: s,
        onOwnedGuildsWarningModalClose: f,
        onDeleteAccountConfirmModalClose: p,
        onDisableAccountErrorModalClose: _,
    } = e;
    return t
        ? (0, r.jsx)(l, { onClose: s })
        : n
          ? (0, r.jsx)(c, { onClose: f })
          : i
            ? (0, r.jsx)(u, { onClose: p })
            : a
              ? (0, r.jsx)(d, {
                    onClose: _,
                    errorMessage: o,
                })
              : null;
}
