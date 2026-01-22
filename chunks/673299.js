function r(e, t) {
    let n = t.style;
    if (!n) return;
    let r = window.getComputedStyle(e);
    r.cssText
        ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
        : toArray(r).forEach((i) => {
              let a = r.getPropertyValue(i);
              if ("font-size" === i && a.endsWith("px")) {
                  let e = Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1;
                  a = `${e}px`;
              }
              isInstanceOfElement(e, HTMLIFrameElement) && "display" === i && "inline" === a && (a = "block"),
                  "d" === i && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`),
                  n.setProperty(i, a, r.getPropertyPriority(i));
          });
}
function i(e, t) {
    isInstanceOfElement(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
        isInstanceOfElement(e, HTMLInputElement) && t.setAttribute("value", e.value);
}
function a(e, t) {
    if (isInstanceOfElement(e, HTMLSelectElement)) {
        let n = Array.from(t.children).find((t) => e.value === t.getAttribute("value"));
        n && n.setAttribute("selected", "");
    }
}
n(502460), n(186659), n(104074), n(340818);
