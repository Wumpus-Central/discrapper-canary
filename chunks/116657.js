i.d(t, { A: () => n });
let n = {
    ApertureValue: (e) => Math.pow(Math.sqrt(2), e[0] / e[1]).toFixed(2),
    ColorSpace: (e) => (1 === e ? "sRGB" : 65535 === e ? "Uncalibrated" : "Unknown"),
    ComponentsConfiguration: (e) =>
        e
            .map((e) => {
                if (49 === e) return "Y";
                if (50 === e) return "Cb";
                if (51 === e) return "Cr";
                if (52 === e) return "R";
                if (53 === e) return "G";
                else if (54 === e) return "B";
            })
            .join(""),
    Contrast: (e) => (0 === e ? "Normal" : 1 === e ? "Soft" : 2 === e ? "Hard" : "Unknown"),
    CustomRendered: (e) => (0 === e ? "Normal process" : 1 === e ? "Custom process" : "Unknown"),
    ExposureMode: (e) =>
        0 === e ? "Auto exposure" : 1 === e ? "Manual exposure" : 2 === e ? "Auto bracket" : "Unknown",
    ExposureProgram(e) {
        if (0 === e) return "Undefined";
        if (1 === e) return "Manual";
        if (2 === e) return "Normal program";
        if (3 === e) return "Aperture priority";
        if (4 === e) return "Shutter priority";
        else if (5 === e) return "Creative program";
        else if (6 === e) return "Action program";
        else if (7 === e) return "Portrait mode";
        else if (8 === e) return "Landscape mode";
        else if (9 === e) return "Bulb";
        return "Unknown";
    },
    ExposureTime(e) {
        if (e[0] / e[1] > 0.25) {
            let t = e[0] / e[1];
            return Number.isInteger(t) ? "" + t : t.toFixed(1);
        }
        return 0 !== e[0] ? `1/${Math.round(e[1] / e[0])}` : `0/${e[1]}`;
    },
    FNumber: (e) => `f/${Number(e[0] / e[1]).toFixed(1)}`,
    FocalLength: (e) => e[0] / e[1] + " mm",
    FocalPlaneResolutionUnit: (e) =>
        2 === e ? "inches" : 3 === e ? "centimeters" : 4 === e ? "millimeters" : "Unknown",
    LightSource: (e) => {
        if (1 === e) return "Daylight";
        if (2 === e) return "Fluorescent";
        if (3 === e) return "Tungsten (incandescent light)";
        if (4 === e) return "Flash";
        if (9 === e) return "Fine weather";
        else if (10 === e) return "Cloudy weather";
        else if (11 === e) return "Shade";
        else if (12 === e) return "Daylight fluorescent (D 5700 – 7100K)";
        else if (13 === e) return "Day white fluorescent (N 4600 – 5400K)";
        else if (14 === e) return "Cool white fluorescent (W 3900 – 4500K)";
        else if (15 === e) return "White fluorescent (WW 3200 – 3700K)";
        else if (17 === e) return "Standard light A";
        else if (18 === e) return "Standard light B";
        else if (19 === e) return "Standard light C";
        else if (20 === e) return "D55";
        else if (21 === e) return "D65";
        else if (22 === e) return "D75";
        else if (23 === e) return "D50";
        else if (24 === e) return "ISO studio tungsten";
        else if (255 === e) return "Other light source";
        return "Unknown";
    },
    MeteringMode(e) {
        if (1 === e) return "Average";
        if (2 === e) return "CenterWeightedAverage";
        if (3 === e) return "Spot";
        if (4 === e) return "MultiSpot";
        if (5 === e) return "Pattern";
        else if (6 === e) return "Partial";
        else if (255 === e) return "Other";
        return "Unknown";
    },
    ResolutionUnit: (e) => (2 === e ? "inches" : 3 === e ? "centimeters" : "Unknown"),
    Saturation: (e) => (0 === e ? "Normal" : 1 === e ? "Low saturation" : 2 === e ? "High saturation" : "Unknown"),
    FocalLengthIn35mmFilm: (e) => (0 === e ? "Unknown" : e + " mm"),
    SceneCaptureType: (e) =>
        0 === e ? "Standard" : 1 === e ? "Landscape" : 2 === e ? "Portrait" : 3 === e ? "Night scene" : "Unknown",
    Sharpness: (e) => (0 === e ? "Normal" : 1 === e ? "Soft" : 2 === e ? "Hard" : "Unknown"),
    ShutterSpeedValue(e) {
        let t = Math.pow(2, e[0] / e[1]);
        return t <= 1 ? `${Math.round(1 / t)}` : `1/${Math.round(t)}`;
    },
    WhiteBalance: (e) => (0 === e ? "Auto white balance" : 1 === e ? "Manual white balance" : "Unknown"),
    XResolution: (e) => "" + Math.round(e[0] / e[1]),
    YResolution: (e) => "" + Math.round(e[0] / e[1]),
};
