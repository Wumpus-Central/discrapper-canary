n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var a = n(834730),
    i = n(13699);
let s = /^(.*?)\s*\((\+\d+)?[\s,]*([\u2212-]\d+)?\)$/,
    r =
        /^(.*?)\s*\((\d+ lines?|\d+ match(?:es)?|no matches|\d+ files?|empty|no logs yet|\d+ not found(?:, \d+ read-only)?|\d+ read-only|\d+KB|\d+ steps?|\d+\xd7\d+(?: @\d+(?:\.\d+)?x| narrow)?|(?:low|medium|high), (?:\d+x\d+|auto)(?:, transparent)?(?:, from \d+ source images?)?)\)$/,
    d =
        /^(Reading|Writing|Editing|Listing|Searching|Deleting|Running|Downloading|Saving|Sending|Importing|Imported|Building|Generating|Viewing|Loaded|Updating|Registering|Collecting|Clicking|Right-clicking|Double-clicking|Dragging|Typing|Pressing|Hovering|Scrolling|Selecting|Waiting|Navigating|Going|Reloading|Capturing|Checking|Setting|Answering|Delegating|Driving|Working)(?= )/,
    u = {
        "text-xs/normal": "text-xs/semibold",
        "text-sm/normal": "text-sm/semibold",
        "text-md/normal": "text-md/semibold",
    };
function o(e, t) {
    let n = d.exec(e);
    return null == n
        ? e
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.E, { tag: "span", variant: u[t], color: "none", children: n[1] }),
                  e.slice(n[1].length),
              ],
          });
}
function c(e) {
    let { text: t, variant: n, prose: a } = e;
    if (!0 === a) return t;
    let d = s.exec(t),
        u = d?.[2],
        c = d?.[3];
    if (null != d && (null != u || null != c))
        return (0, l.jsxs)(l.Fragment, {
            children: [
                o(d[1], n),
                null == u ? null : (0, l.jsxs)("span", { className: i.MM, children: [" ", u] }),
                null == c ? null : (0, l.jsxs)("span", { className: i.ie, children: [" ", c] }),
            ],
        });
    let m = r.exec(t);
    return null == m
        ? o(t, n)
        : (0, l.jsxs)(l.Fragment, {
              children: [o(m[1], n), (0, l.jsxs)("span", { className: i.qZ, children: [" ", m[2]] })],
          });
}
