n.d(t, { A: () => o }), n(896048), n(747238);
var r = n(944181),
    a = n(763424);
let l = new Set(r.roles.keys()),
    o = {
        id: "aria-valid-roles",
        selector: "[role]",
        tags: ["wcag2a", "wcag412"],
        metadata: {
            description: "ARIA roles used must conform to valid values",
            help: "Ensures all elements with a role attribute use a valid value",
        },
        check: function (e) {
            for (let t of e.getAttribute("role").split(" "))
                if (!l.has(t)) return "Role '".concat(t, "' is not a valid ARIA role");
            return a.o;
        },
    };
