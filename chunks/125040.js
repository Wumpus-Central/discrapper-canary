n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(421380),
    a = n(397927),
    s = n(631670),
    o = n(985018);
function l(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.MJ3, {
        dismissable: !0,
        header: o.intl.string(o.t.UNGZDI),
        confirmText: o.intl.string(o.t.BddRzS),
        confirmButtonColor: i.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: o.intl.string(o.t.alpAUm),
        }),
    });
}
function c(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.MJ3, {
        dismissable: !0,
        header: o.intl.string(o.t.I5UrbV),
        confirmText: o.intl.string(o.t.BddRzS),
        confirmButtonColor: i.XD.BRAND,
        onCancel: t,
        onConfirm: t,
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: o.intl.string(o.t.UyVVan),
        }),
    });
}
function u(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(a.MJ3, {
        dismissable: !0,
        header: o.intl.string(o.t["8lQ2rR"]),
        confirmText: o.intl.string(o.t["8lQ2rR"]),
        cancelText: o.intl.string(o.t["ETE/oC"]),
        onCancel: t,
        onConfirm: () => (0, s.U_)("", !0).then(t),
        children: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: o.intl.string(o.t.FB4H1D),
        }),
    });
}
function d(e) {
    let { onClose: t, errorMessage: n } = e;
    return (0, r.jsx)(a.MJ3, {
        dismissable: !0,
        header: o.intl.string(o.t.LX0nT8),
        confirmText: o.intl.string(o.t.BddRzS),
        confirmButtonColor: i.XD.BRAND,
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
        disableAccountErrorMessage: s,
        onOwnedTeamsWarningModalClose: o,
        onOwnedGuildsWarningModalClose: f,
        onDeleteAccountConfirmModalClose: p,
        onDisableAccountErrorModalClose: _,
    } = e;
    return t
        ? (0, r.jsx)(l, { onClose: o })
        : n
          ? (0, r.jsx)(c, { onClose: f })
          : i
            ? (0, r.jsx)(u, { onClose: p })
            : a
              ? (0, r.jsx)(d, {
                    onClose: _,
                    errorMessage: s,
                })
              : null;
}
