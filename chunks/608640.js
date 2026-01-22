n.d(t, { J: () => a });
var r = n(157559),
    i = n(985018);
function a(e) {
    let { onConfirm: t } = e;
    return r.A.show({
        title: i.intl.string(i.t.rWQr9U),
        body: i.intl.string(i.t["7Aa3S7"]),
        confirmText: i.intl.string(i.t["/k52hw"]),
        confirmVariant: "critical-primary",
        cancelText: i.intl.string(i.t["4nkxA+"]),
        onConfirm: t,
        onCancel: () => {
            r.A.close();
        },
    });
}
