a.d(l, { J: () => m });
var t = a(627968),
    i = a(64700),
    n = a(452027),
    o = a(862301),
    r = a(939538),
    s = a(305866),
    d = a(922016),
    u = a(939249),
    c = a(834730),
    b = a(81466),
    p = a(780781);
function m(e) {
    let { value: l, onSelect: a, dateFormat: m = "ll", minDate: h, maxDate: x, disabled: g = !1, ...f } = e,
        { required: v } = f,
        y = i.useRef(null);
    return (0, t.jsx)(d.Y, {
        targetElementRef: y,
        renderPopout: function (e) {
            let { closePopout: i } = e;
            return (0, t.jsx)(s.l, {
                children: (0, t.jsx)(r.CalendarPicker, {
                    minDate: h,
                    maxDate: x,
                    value: l,
                    onSelect: (e) => {
                        a(e), i();
                    },
                    calendarClassName: p.a,
                    onClickOutside: i,
                    autoFocus: !0,
                }),
            });
        },
        position: "bottom",
        children: (e) => {
            let { onClick: a, ...i } = e;
            return (0, t.jsx)(n.D, {
                ...f,
                children: (e) =>
                    (0, t.jsxs)(o.F, {
                        as: u.D,
                        tag: "div",
                        innerRef: y,
                        disabled: g,
                        "aria-disabled": g,
                        ...i,
                        id: e?.controlId,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        "aria-required": v,
                        className: p.k,
                        onClick: g ? void 0 : a,
                        children: [
                            (0, t.jsx)(c.E, { variant: "text-md/normal", children: l?.format(m) }),
                            (0, t.jsx)(b.C, { size: "sm" }),
                        ],
                    }),
            });
        },
    });
}
