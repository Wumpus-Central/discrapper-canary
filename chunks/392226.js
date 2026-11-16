var i = n(136857),
    r = n(679677),
    a = n(26279);
n.d(
    t,
    {},
    {
        i: function (e) {
            if (
                e.unsatisfied_constraints?.some((e) => {
                    let { reason_code: t } = e;
                    return t === r.j.PURCHASE_RESTRICTED;
                })
            )
                return new i.Ay("", i.Ay.ErrorCodes.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION);
            let { error: t } = e;
            return null == t || t.code === a.lD.UNKNOWN_ERROR_CODE ? null : new i.Ay(t.message, t.billing_error_code);
        },
    },
);
