i.d(t, { A: () => r });
var n = i(723727);
let r = {
    0: {
        name: "GPSVersionID",
        description: (e) => (2 === e[0] && 2 === e[1] && 0 === e[2] && 0 === e[3] ? "Version 2.2" : "Unknown"),
    },
    1: {
        name: "GPSLatitudeRef",
        description: (e) => {
            let t = e.join("");
            return "N" === t ? "North latitude" : "S" === t ? "South latitude" : "Unknown";
        },
    },
    2: { name: "GPSLatitude", description: n.e7 },
    3: {
        name: "GPSLongitudeRef",
        description: (e) => {
            let t = e.join("");
            return "E" === t ? "East longitude" : "W" === t ? "West longitude" : "Unknown";
        },
    },
    4: { name: "GPSLongitude", description: n.e7 },
    5: {
        name: "GPSAltitudeRef",
        description: (e) => (0 === e ? "Sea level" : 1 === e ? "Sea level reference (negative value)" : "Unknown"),
    },
    6: { name: "GPSAltitude", description: (e) => e[0] / e[1] + " m" },
    7: {
        name: "GPSTimeStamp",
        description: (e) =>
            e
                .map(([e, t]) => {
                    let i = e / t;
                    return /^\d(\.|$)/.test(`${i}`) ? `0${i}` : i;
                })
                .join(":"),
    },
    8: "GPSSatellites",
    9: {
        name: "GPSStatus",
        description: (e) => {
            let t = e.join("");
            return "A" === t ? "Measurement in progress" : "V" === t ? "Measurement Interoperability" : "Unknown";
        },
    },
    10: {
        name: "GPSMeasureMode",
        description: (e) => {
            let t = e.join("");
            return "2" === t ? "2-dimensional measurement" : "3" === t ? "3-dimensional measurement" : "Unknown";
        },
    },
    11: "GPSDOP",
    12: {
        name: "GPSSpeedRef",
        description: (e) => {
            let t = e.join("");
            return "K" === t ? "Kilometers per hour" : "M" === t ? "Miles per hour" : "N" === t ? "Knots" : "Unknown";
        },
    },
    13: "GPSSpeed",
    14: {
        name: "GPSTrackRef",
        description: (e) => {
            let t = e.join("");
            return "T" === t ? "True direction" : "M" === t ? "Magnetic direction" : "Unknown";
        },
    },
    15: "GPSTrack",
    16: {
        name: "GPSImgDirectionRef",
        description: (e) => {
            let t = e.join("");
            return "T" === t ? "True direction" : "M" === t ? "Magnetic direction" : "Unknown";
        },
    },
    17: "GPSImgDirection",
    18: "GPSMapDatum",
    19: {
        name: "GPSDestLatitudeRef",
        description: (e) => {
            let t = e.join("");
            return "N" === t ? "North latitude" : "S" === t ? "South latitude" : "Unknown";
        },
    },
    20: {
        name: "GPSDestLatitude",
        description: (e) => e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600,
    },
    21: {
        name: "GPSDestLongitudeRef",
        description: (e) => {
            let t = e.join("");
            return "E" === t ? "East longitude" : "W" === t ? "West longitude" : "Unknown";
        },
    },
    22: {
        name: "GPSDestLongitude",
        description: (e) => e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600,
    },
    23: {
        name: "GPSDestBearingRef",
        description: (e) => {
            let t = e.join("");
            return "T" === t ? "True direction" : "M" === t ? "Magnetic direction" : "Unknown";
        },
    },
    24: "GPSDestBearing",
    25: {
        name: "GPSDestDistanceRef",
        description: (e) => {
            let t = e.join("");
            return "K" === t ? "Kilometers" : "M" === t ? "Miles" : "N" === t ? "Knots" : "Unknown";
        },
    },
    26: "GPSDestDistance",
    27: { name: "GPSProcessingMethod", description: n.Cn },
    28: { name: "GPSAreaInformation", description: n.Cn },
    29: "GPSDateStamp",
    30: {
        name: "GPSDifferential",
        description: (e) =>
            0 === e
                ? "Measurement without differential correction"
                : 1 === e
                  ? "Differential correction applied"
                  : "Unknown",
    },
    31: "GPSHPositioningError",
};
