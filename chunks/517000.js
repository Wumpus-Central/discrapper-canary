i.d(t, { n: () => a, r: () => o, t: () => c });
var r = i(248702),
    n = new Set([0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 104, 120, 200]),
    o = ({ size: e, className: t, direction: i = "vertical" }) =>
        void 0 === e
            ? (0, r.v)("div", { class: `IncodeSpacerFlex ${t || ""}` })
            : ("horizontal" === i || "vertical" === i) && "number" == typeof e && n.has(e)
              ? (0, r.v)("div", {
                    class: `${"horizontal" === i ? ({ 0: "IncodeSpacerHorizontal0", 2: "IncodeSpacerHorizontal2", 4: "IncodeSpacerHorizontal4", 8: "IncodeSpacerHorizontal8", 12: "IncodeSpacerHorizontal12", 16: "IncodeSpacerHorizontal16", 20: "IncodeSpacerHorizontal20", 24: "IncodeSpacerHorizontal24", 32: "IncodeSpacerHorizontal32", 40: "IncodeSpacerHorizontal40", 48: "IncodeSpacerHorizontal48", 64: "IncodeSpacerHorizontal64", 80: "IncodeSpacerHorizontal80", 96: "IncodeSpacerHorizontal96", 104: "IncodeSpacerHorizontal104", 120: "IncodeSpacerHorizontal120", 200: "IncodeSpacerHorizontal200" })[e] : ({ 0: "IncodeSpacerVertical0", 2: "IncodeSpacerVertical2", 4: "IncodeSpacerVertical4", 8: "IncodeSpacerVertical8", 12: "IncodeSpacerVertical12", 16: "IncodeSpacerVertical16", 20: "IncodeSpacerVertical20", 24: "IncodeSpacerVertical24", 32: "IncodeSpacerVertical32", 40: "IncodeSpacerVertical40", 48: "IncodeSpacerVertical48", 64: "IncodeSpacerVertical64", 80: "IncodeSpacerVertical80", 96: "IncodeSpacerVertical96", 104: "IncodeSpacerVertical104", 120: "IncodeSpacerVertical120", 200: "IncodeSpacerVertical200" })[e]} ${t || ""}`,
                })
              : (0, r.v)("div", { class: `${t || ""}` }),
    a = (...e) => {
        let t = [];
        for (let i of e)
            if (i) {
                if ("string" == typeof i) t.push(i);
                else if ("object" == typeof i) for (let [e, r] of Object.entries(i)) r && t.push(e);
            }
        return t.join(" ");
    },
    s = ({ size: e, className: t }) =>
        (0, r.v)("svg", {
            width: e,
            height: e,
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: a("IncodeLoadingIconPrimaryIcon", t),
            "aria-hidden": "true",
            children: (0, r.v)("path", {
                d: "M28.1614 15.2837C29.453 15.2837 30.5186 14.2304 30.3181 12.9545C30.1344 11.7862 29.8129 10.6411 29.3582 9.54344C28.6044 7.72356 27.4995 6.06997 26.1066 4.67709C24.7137 3.28421 23.0601 2.17932 21.2403 1.4255C20.1426 0.970841 18.9974 0.649265 17.8292 0.46563C16.5533 0.265073 15.5 1.33073 15.5 2.62232C15.5 3.91391 16.5601 4.93461 17.8187 5.22473C18.3748 5.35291 18.9206 5.52729 19.4503 5.74672C20.7028 6.26548 21.8407 7.02585 22.7993 7.98441C23.7578 8.94296 24.5182 10.0809 25.037 11.3333C25.2564 11.8631 25.4308 12.4089 25.559 12.965C25.8491 14.2236 26.8698 15.2837 28.1614 15.2837Z",
            }),
        }),
    l = ({ size: e, className: t }) =>
        (0, r.v)("svg", {
            width: e,
            height: e,
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: a("IncodeLoadingIconSecondaryIcon", t),
            "aria-hidden": "true",
            children: [
                (0, r.v)("title", { children: "Spinner Outer part" }),
                (0, r.v)("path", {
                    d: "M30.5 15.2837C30.5 23.568 23.7843 30.2837 15.5 30.2837C7.21573 30.2837 0.5 23.568 0.5 15.2837C0.5 6.99942 7.21573 0.283691 15.5 0.283691C23.7843 0.283691 30.5 6.99942 30.5 15.2837ZM5.17725 15.2837C5.17725 20.9848 9.7989 25.6064 15.5 25.6064C21.2011 25.6064 25.8227 20.9848 25.8227 15.2837C25.8227 9.5826 21.2011 4.96095 15.5 4.96095C9.7989 4.96095 5.17725 9.5826 5.17725 15.2837Z",
                }),
            ],
        }),
    c = ({ size: e = 30, secondaryClass: t, primaryClass: i }) => {
        let n = (0, r.l)(null);
        return (
            (0, r.f)(() => {
                if (!n.current) return;
                let e = performance.now() % 1e3;
                n.current.style.animationDelay = `-${e}ms`;
            }, []),
            (0, r.v)("div", {
                ref: n,
                class: "IncodeLoadingIcon",
                children: [
                    (0, r.v)(l, { size: e, className: t }),
                    (0, r.v)("div", {
                        class: "IncodeLoadingIconPrimary",
                        children: (0, r.v)(s, { size: e, className: i }),
                    }),
                ],
            })
        );
    };
