"use strict";
t.d(r, { A: () => i, J: () => l });
var a = t(101603);
function l(e) {
    var r;
    return null != (r = e.localName) ? r : e.tagName.toLowerCase();
}
var o = {
        article: "article",
        aside: "complementary",
        button: "button",
        datalist: "listbox",
        dd: "definition",
        details: "group",
        dialog: "dialog",
        dt: "term",
        fieldset: "group",
        figure: "figure",
        form: "form",
        footer: "contentinfo",
        h1: "heading",
        h2: "heading",
        h3: "heading",
        h4: "heading",
        h5: "heading",
        h6: "heading",
        header: "banner",
        hr: "separator",
        html: "document",
        legend: "legend",
        li: "listitem",
        math: "math",
        main: "main",
        menu: "list",
        nav: "navigation",
        ol: "list",
        optgroup: "group",
        option: "option",
        output: "status",
        progress: "progressbar",
        section: "region",
        summary: "button",
        table: "table",
        tbody: "rowgroup",
        textarea: "textbox",
        tfoot: "rowgroup",
        td: "cell",
        th: "columnheader",
        thead: "rowgroup",
        tr: "row",
        ul: "list",
    },
    s = {
        caption: new Set(["aria-label", "aria-labelledby"]),
        code: new Set(["aria-label", "aria-labelledby"]),
        deletion: new Set(["aria-label", "aria-labelledby"]),
        emphasis: new Set(["aria-label", "aria-labelledby"]),
        generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
        insertion: new Set(["aria-label", "aria-labelledby"]),
        none: new Set(["aria-label", "aria-labelledby"]),
        paragraph: new Set(["aria-label", "aria-labelledby"]),
        presentation: new Set(["aria-label", "aria-labelledby"]),
        strong: new Set(["aria-label", "aria-labelledby"]),
        subscript: new Set(["aria-label", "aria-labelledby"]),
        superscript: new Set(["aria-label", "aria-labelledby"]),
    };
function n(e, r) {
    return [
        "aria-atomic",
        "aria-busy",
        "aria-controls",
        "aria-current",
        "aria-description",
        "aria-describedby",
        "aria-details",
        "aria-dropeffect",
        "aria-flowto",
        "aria-grabbed",
        "aria-hidden",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-owns",
        "aria-relevant",
        "aria-roledescription",
    ].some(function (t) {
        var a;
        return e.hasAttribute(t) && !(null != (a = s[r]) && a.has(t));
    });
}
function i(e) {
    var r = (function (e) {
        var r = e.getAttribute("role");
        if (null !== r) {
            var t = r.trim().split(" ")[0];
            if (t.length > 0) return t;
        }
        return null;
    })(e);
    if (null === r || -1 !== a.UC.indexOf(r)) {
        var t = (function (e) {
            var r = o[l(e)];
            if (void 0 !== r) return r;
            switch (l(e)) {
                case "a":
                case "area":
                case "link":
                    if (e.hasAttribute("href")) return "link";
                    break;
                case "img":
                    if ("" === e.getAttribute("alt") && !n(e, "img")) return "presentation";
                    return "img";
                case "input":
                    var t = e.type;
                    switch (t) {
                        case "button":
                        case "image":
                        case "reset":
                        case "submit":
                            return "button";
                        case "checkbox":
                        case "radio":
                            return t;
                        case "range":
                            return "slider";
                        case "email":
                        case "tel":
                        case "text":
                        case "url":
                            if (e.hasAttribute("list")) return "combobox";
                            return "textbox";
                        case "search":
                            if (e.hasAttribute("list")) return "combobox";
                            return "searchbox";
                        case "number":
                            return "spinbutton";
                        default:
                            return null;
                    }
                case "select":
                    if (e.hasAttribute("multiple") || e.size > 1) return "listbox";
                    return "combobox";
            }
            return null;
        })(e);
        if (-1 === a.UC.indexOf(r || "") || n(e, t || "")) return t;
    }
    return r;
}
