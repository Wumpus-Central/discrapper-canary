function r(e) {
    let t = e.getPropertyValue("content");
    return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function i(e) {
    return toArray(e)
        .map((t) => {
            let n = e.getPropertyValue(t),
                r = e.getPropertyPriority(t);
            return `${t}: ${n}${r ? " !important" : ""};`;
        })
        .join(" ");
}
function a(e, t, n) {
    let a = `.${e}:${t}`,
        o = n.cssText ? r(n) : i(n);
    return document.createTextNode(`${a}{${o}}`);
}
n(961742);
