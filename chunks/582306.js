"use strict";
n.d(t, { J: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(939538),
    o = n(305866),
    l = n(265872),
    u = n(397927),
    c = n(38298);
let d = "ll";
function _(e) {
    let { value: t, onSelect: n, dateFormat: _ = d, minDate: f, maxDate: p, disabled: h = !1, ...m } = e,
        E = i.useRef(null);
    function g(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(o.l, {
            children: (0, r.jsx)(a.CalendarPicker, {
                minDate: f,
                maxDate: p,
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
        renderPopout: g,
        position: "bottom",
        children: (e) => {
            let { onClick: n, ...i } = e;
            return (0, r.jsx)(s.D0$, {
                ...m,
                children: (e) =>
                    (0, r.jsxs)(s.FON, {
                        as: u.DUT,
                        tag: "div",
                        innerRef: E,
                        disabled: h,
                        "aria-disabled": h,
                        ...i,
                        id: e?.controlId,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        className: c.k,
                        onClick: h ? void 0 : n,
                        children: [
                            (0, r.jsx)(u.Text, { variant: "text-md/normal", children: t?.format(_) }),
                            (0, r.jsx)(u.CTc, { size: "sm" }),
                        ],
                    }),
            });
        },
    });
}
