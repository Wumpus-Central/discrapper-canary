"use strict";
n.d(t, { J: () => A });
var i = n(477900),
    r = n(582128),
    a = n(452027),
    s = n(862301),
    l = n(939249),
    o = n(834730),
    d = n(81466),
    c = n(939538),
    u = n(305866),
    _ = n(922016),
    E = n(188597);
function A(e) {
    let { value: t, onSelect: n, dateFormat: A = "ll", minDate: h, maxDate: I, disabled: f = !1, ...p } = e,
        { required: T } = p,
        m = r.useRef(null);
    return (0, i.jsx)(_.Y, {
        targetElementRef: m,
        renderPopout: function (e) {
            let { closePopout: r } = e;
            return (0, i.jsx)(u.l, {
                children: (0, i.jsx)(c.CalendarPicker, {
                    minDate: h,
                    maxDate: I,
                    value: t,
                    onSelect: (e) => {
                        n(e), r();
                    },
                    calendarClassName: E.a,
                    onClickOutside: r,
                    autoFocus: !0,
                }),
            });
        },
        position: "bottom",
        children: (e) => {
            let { onClick: n, ...r } = e;
            return (0, i.jsx)(a.D, {
                ...p,
                children: (e) =>
                    (0, i.jsxs)(s.F, {
                        as: l.D,
                        tag: "div",
                        innerRef: m,
                        disabled: f,
                        "aria-disabled": f,
                        ...r,
                        id: e?.controlId,
                        "aria-labelledby": null != e ? `${e.labelId} ${e.controlId}` : void 0,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        "aria-required": T,
                        className: E.k,
                        onClick: f ? void 0 : n,
                        children: [
                            (0, i.jsx)(o.E, { variant: "text-md/normal", children: t?.format(A) }),
                            (0, i.jsx)(d.CalendarIcon, { size: "sm" }),
                        ],
                    }),
            });
        },
    });
}
