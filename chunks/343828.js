i.d(t, { A: () => n });
let n = {
    get: function (e) {
        if (e) return e;
        if ("u" > typeof DOMParser) return new DOMParser();
        try {
            let { DOMParser: e, onErrorStopParsing: t } = require("@xmldom/xmldom");
            return new e({ onError: t });
        } catch (e) {
            return;
        }
    },
};
