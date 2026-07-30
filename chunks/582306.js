r.d(a, { J: () => h });
var i = r(477900),
    l = r(582128),
    d = r(452027),
    s = r(862301),
    n = r(939249),
    t = r(834730),
    o = r(81466),
    c = r(939538),
    u = r(305866),
    b = r(922016),
    m = r(188597);
function h(e) {
    let { value: a, onSelect: r, dateFormat: h = "ll", minDate: p, maxDate: x, disabled: k = !1, ...j } = e,
        { required: v } = j,
        C = l.useRef(null);
    return (0, i.jsx)(b.Y, {
        targetElementRef: C,
        renderPopout: function (e) {
            let { closePopout: l } = e;
            return (0, i.jsx)(u.l, {
                children: (0, i.jsx)(c.CalendarPicker, {
                    minDate: p,
                    maxDate: x,
                    value: a,
                    onSelect: (e) => {
                        r(e), l();
                    },
                    calendarClassName: m.a,
                    onClickOutside: l,
                    autoFocus: !0,
                }),
            });
        },
        position: "bottom",
        children: (e) => {
            let { onClick: r, ...l } = e;
            return (0, i.jsx)(d.D, {
                ...j,
                children: (e) =>
                    (0, i.jsxs)(s.F, {
                        as: n.D,
                        tag: "div",
                        innerRef: C,
                        disabled: k,
                        "aria-disabled": k,
                        ...l,
                        id: e?.controlId,
                        "aria-labelledby": null != e ? `${e.labelId} ${e.controlId}` : void 0,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        "aria-required": v,
                        className: m.k,
                        onClick: k ? void 0 : r,
                        children: [
                            (0, i.jsx)(t.E, { variant: "text-md/normal", children: a?.format(h) }),
                            (0, i.jsx)(o.C, { size: "sm" }),
                        ],
                    }),
            });
        },
    });
}
