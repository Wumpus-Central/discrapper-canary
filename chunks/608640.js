"use strict";
n.d(t, { J: () => s });
var r = n(157559),
    i = n(985018);
function s(e) {
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
