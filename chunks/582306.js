"use strict";
n.d(t, { J: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(939538),
    o = n(305866),
    l = n(265872),
    u = n(397927),
    c = n(821584);
let d = "ll";
function _(e) {
    let { value: t, onSelect: n, dateFormat: _ = d, minDate: f, maxDate: h, disabled: p = !1, ...g } = e,
        E = i.useRef(null);
    function A(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(o.l, {
            children: (0, r.jsx)(s.CalendarPicker, {
                minDate: f,
                maxDate: h,
                value: t,
                onSelect: (e) => {
                    n(e), i();
                },
                calendarClassName: c.a,
                onClickOutside: i,
                autoFocus: !0,
            }),
        });
    }
    return (0, r.jsx)(l.Y, {
        targetElementRef: E,
        renderPopout: A,
        position: "bottom",
        children: (e) => {
            let { onClick: n, ...i } = e;
            return (0, r.jsx)(a.D0$, {
                ...g,
                children: (e) =>
                    (0, r.jsxs)(a.FON, {
                        as: u.DUT,
                        tag: "div",
                        innerRef: E,
                        disabled: p,
                        "aria-disabled": p,
                        ...i,
                        id: e?.controlId,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        className: c.k,
                        onClick: p ? void 0 : n,
                        children: [
                            (0, r.jsx)(u.Text, { variant: "text-md/normal", children: t?.format(_) }),
                            (0, r.jsx)(u.CTc, { size: "sm" }),
                        ],
                    }),
            });
        },
    });
}
