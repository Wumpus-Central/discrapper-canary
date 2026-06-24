i.d(t, { t: () => o });
let r = ["callPhantom", "_phantom", "phantom", "__nightmare", "domAutomation", "domAutomationController"],
    n = ["webdriver"];
function o(e) {
    for (let t of r) if (e.getWindowProperty(t)) return !0;
    for (let t of n) if (e.getNavigatorProperty(t)) return !0;
    return !1;
}
