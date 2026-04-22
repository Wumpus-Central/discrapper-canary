n.d(t, { J: () => A });
var i = n(627968),
    l = n(64700),
    a = n(452027),
    s = n(862301),
    r = n(939538),
    o = n(305866),
    c = n(265872),
    d = n(939249),
    u = n(834730),
    h = n(81466),
    m = n(780781);
function A(e) {
    let { value: t, onSelect: n, dateFormat: A = "ll", minDate: g, maxDate: p, disabled: _ = !1, ...f } = e,
        E = l.useRef(null);
    return (0, i.jsx)(c.Y, {
        targetElementRef: E,
        renderPopout: function (e) {
            let { closePopout: l } = e;
            return (0, i.jsx)(o.l, {
                children: (0, i.jsx)(r.CalendarPicker, {
                    minDate: g,
                    maxDate: p,
                    value: t,
                    onSelect: (e) => {
                        n(e), l();
                    },
                    calendarClassName: m.a,
                    onClickOutside: l,
                    autoFocus: !0,
                }),
            });
        },
        position: "bottom",
        children: (e) => {
            let { onClick: n, ...l } = e;
            return (0, i.jsx)(a.D, {
                ...f,
                children: (e) =>
                    (0, i.jsxs)(s.F, {
                        as: d.D,
                        tag: "div",
                        innerRef: E,
                        disabled: _,
                        "aria-disabled": _,
                        ...l,
                        id: e?.controlId,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        className: m.k,
                        onClick: _ ? void 0 : n,
                        children: [
                            (0, i.jsx)(u.E, { variant: "text-md/normal", children: t?.format(A) }),
                            (0, i.jsx)(h.C, { size: "sm" }),
                        ],
                    }),
            });
        },
    });
}
