r.d(t, { A: () => i });
var n = r(944181),
    a = r(763424);
let l = new Set(n.roles.keys()),
    i = {
        id: "aria-valid-roles",
        selector: "[role]",
        tags: ["wcag2a", "wcag412"],
        metadata: {
            description: "ARIA roles used must conform to valid values",
            help: "Ensures all elements with a role attribute use a valid value",
        },
        check: function (e) {
            for (let t of e.getAttribute("role").split(" "))
                if (!l.has(t)) return `Role '${t}' is not a valid ARIA role`;
            return a.o;
        },
    };
