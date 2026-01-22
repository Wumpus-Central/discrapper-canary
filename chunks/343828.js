n.d(t, {
    A: () => r,
});
let r = {
    get: i,
};

function i(e) {
    if (e) return e;
    if ("u" > typeof DOMParser) return new DOMParser();
    try {
        let { DOMParser: e, onErrorStopParsing: t } = require("@xmldom/xmldom");
        return new e({
            onError: t,
        });
    } catch (e) {
        return;
    }
}
