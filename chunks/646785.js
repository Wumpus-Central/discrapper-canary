n.d(t, { Z: () => u }), n(388685);
var r = n(485589),
    a = n(59049),
    l = n(14160),
    i = n(247123),
    o = n(207662);
let u = {
    id: "aria-allowed-attributes",
    selector: o.J8,
    tags: ["wcag2a", "wcag412"],
    metadata: {
        description: "Only use supported ARIA attributes",
        help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page.",
    },
    check: function (e) {
        let t = (0, a.cY)(e),
            n = r.roles.get(t);
        if (null == n) return i.w;
        for (let r of o.cg)
            if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
                if ("aria-expanded" === r && e.hasAttribute("aria-controls")) continue;
                if (!(0, l.p)(e)) return i.w;
                return "'".concat(t, "' does not support the ").concat(r, " attribute");
            }
        return i.w;
    },
};
