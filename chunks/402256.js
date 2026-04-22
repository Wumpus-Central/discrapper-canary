i.d(t, { A: () => r });
var n = i(723727);
let r = {
    iptc: {
        256: { name: "Model Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        261: { name: "Destination", repeatable: !0 },
        276: { name: "File Format", description: (e) => ((e[0] << 8) + e[1]).toString() },
        278: { name: "File Format Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        286: "Service Identifier",
        296: "Envelope Number",
        306: "Product ID",
        316: "Envelope Priority",
        326: { name: "Date Sent", description: o },
        336: { name: "Time Sent", description: a },
        346: { name: "Coded Character Set", description: s, encoding_name: s },
        356: "UNO",
        376: { name: "ARM Identifier", description: (e) => ((e[0] << 8) + e[1]).toString() },
        378: { name: "ARM Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        512: { name: "Record Version", description: (e) => ((e[0] << 8) + e[1]).toString() },
        515: "Object Type Reference",
        516: "Object Attribute Reference",
        517: "Object Name",
        519: "Edit Status",
        520: {
            name: "Editorial Update",
            description: (e) => ("01" === (0, n.Jn)(e) ? "Additional Language" : "Unknown"),
        },
        522: "Urgency",
        524: {
            name: "Subject Reference",
            repeatable: !0,
            description: (e) => {
                let t = (0, n.Jn)(e).split(":");
                return t[2] + (t[3] ? "/" + t[3] : "") + (t[4] ? "/" + t[4] : "");
            },
        },
        527: "Category",
        532: { name: "Supplemental Category", repeatable: !0 },
        534: "Fixture Identifier",
        537: { name: "Keywords", repeatable: !0 },
        538: { name: "Content Location Code", repeatable: !0 },
        539: { name: "Content Location Name", repeatable: !0 },
        542: "Release Date",
        547: "Release Time",
        549: "Expiration Date",
        550: "Expiration Time",
        552: "Special Instructions",
        554: {
            name: "Action Advised",
            description: (e) => {
                let t = (0, n.Jn)(e);
                return "01" === t
                    ? "Object Kill"
                    : "02" === t
                      ? "Object Replace"
                      : "03" === t
                        ? "Object Append"
                        : "04" === t
                          ? "Object Reference"
                          : "Unknown";
            },
        },
        557: { name: "Reference Service", repeatable: !0 },
        559: { name: "Reference Date", repeatable: !0 },
        562: { name: "Reference Number", repeatable: !0 },
        567: { name: "Date Created", description: o },
        572: { name: "Time Created", description: a },
        574: { name: "Digital Creation Date", description: o },
        575: { name: "Digital Creation Time", description: a },
        577: "Originating Program",
        582: "Program Version",
        587: {
            name: "Object Cycle",
            description: (e) => {
                let t = (0, n.Jn)(e);
                return "a" === t ? "morning" : "p" === t ? "evening" : "b" === t ? "both" : "Unknown";
            },
        },
        592: { name: "By-line", repeatable: !0 },
        597: { name: "By-line Title", repeatable: !0 },
        602: "City",
        604: "Sub-location",
        607: "Province/State",
        612: "Country/Primary Location Code",
        613: "Country/Primary Location Name",
        615: "Original Transmission Reference",
        617: "Headline",
        622: "Credit",
        627: "Source",
        628: "Copyright Notice",
        630: { name: "Contact", repeatable: !0 },
        632: "Caption/Abstract",
        634: { name: "Writer/Editor", repeatable: !0 },
        637: { name: "Rasterized Caption", description: (e) => e },
        642: "Image Type",
        643: {
            name: "Image Orientation",
            description: (e) => {
                let t = (0, n.Jn)(e);
                return "P" === t ? "Portrait" : "L" === t ? "Landscape" : "S" === t ? "Square" : "Unknown";
            },
        },
        647: "Language Identifier",
        662: {
            name: "Audio Type",
            description: (e) => {
                let t = (0, n.Jn)(e),
                    i = t.charAt(0),
                    r = t.charAt(1),
                    o = "";
                return ("1" === i ? (o += "Mono") : "2" === i && (o += "Stereo"),
                "A" === r
                    ? (o += ", actuality")
                    : "C" === r
                      ? (o += ", question and answer session")
                      : "M" === r
                        ? (o += ", music, transmitted by itself")
                        : "Q" === r
                          ? (o += ", response to a question")
                          : "R" === r
                            ? (o += ", raw sound")
                            : "S" === r
                              ? (o += ", scener")
                              : "V" === r
                                ? (o += ", voicer")
                                : "W" === r && (o += ", wrap"),
                "" !== o)
                    ? o
                    : t;
            },
        },
        663: { name: "Audio Sampling Rate", description: (e) => parseInt((0, n.Jn)(e), 10) + " Hz" },
        664: {
            name: "Audio Sampling Resolution",
            description: (e) => {
                let t = parseInt((0, n.Jn)(e), 10);
                return t + (1 === t ? " bit" : " bits");
            },
        },
        665: {
            name: "Audio Duration",
            description: (e) => {
                let t = (0, n.Jn)(e);
                return t.length >= 6 ? t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2) : t;
            },
        },
        666: "Audio Outcue",
        698: "Short Document ID",
        699: "Unique Document ID",
        700: "Owner ID",
        712: {
            name: (e) => (2 === e.length ? "ObjectData Preview File Format" : "Record 2 destination"),
            description: (e) => {
                if (2 === e.length) {
                    let t = (e[0] << 8) + e[1];
                    if (0 === t) return "No ObjectData";
                    if (1 === t) return "IPTC-NAA Digital Newsphoto Parameter Record";
                    if (2 === t) return "IPTC7901 Recommended Message Format";
                    else if (3 === t) return "Tagged Image File Format (Adobe/Aldus Image data)";
                    else if (4 === t) return "Illustrator (Adobe Graphics data)";
                    else if (5 === t) return "AppleSingle (Apple Computer Inc)";
                    else if (6 === t) return "NAA 89-3 (ANPA 1312)";
                    else if (7 === t) return "MacBinary II";
                    else if (8 === t) return "IPTC Unstructured Character Oriented File Format (UCOFF)";
                    else if (9 === t) return "United Press International ANPA 1312 variant";
                    else if (10 === t) return "United Press International Down-Load Message";
                    else if (11 === t) return "JPEG File Interchange (JFIF)";
                    else if (12 === t) return "Photo-CD Image-Pac (Eastman Kodak)";
                    else if (13 === t) return "Microsoft Bit Mapped Graphics File [*.BMP]";
                    else if (14 === t) return "Digital Audio File [*.WAV] (Microsoft & Creative Labs)";
                    else if (15 === t) return "Audio plus Moving Video [*.AVI] (Microsoft)";
                    else if (16 === t) return "PC DOS/Windows Executable Files [*.COM][*.EXE]";
                    else if (17 === t) return "Compressed Binary File [*.ZIP] (PKWare Inc)";
                    else if (18 === t) return "Audio Interchange File Format AIFF (Apple Computer Inc)";
                    else if (19 === t) return "RIFF Wave (Microsoft Corporation)";
                    else if (20 === t) return "Freehand (Macromedia/Aldus)";
                    else if (21 === t) return 'Hypertext Markup Language "HTML" (The Internet Society)';
                    else if (22 === t) return "MPEG 2 Audio Layer 2 (Musicom), ISO/IEC";
                    else if (23 === t) return "MPEG 2 Audio Layer 3, ISO/IEC";
                    else if (24 === t) return "Portable Document File (*.PDF) Adobe";
                    else if (25 === t) return "News Industry Text Format (NITF)";
                    else if (26 === t) return "Tape Archive (*.TAR)";
                    else if (27 === t) return "Tidningarnas Telegrambyr\xe5 NITF version (TTNITF DTD)";
                    else if (28 === t) return "Ritzaus Bureau NITF version (RBNITF DTD)";
                    else if (29 === t) return "Corel Draw [*.CDR]";
                    return `Unknown format ${t}`;
                }
                return (0, n.Jn)(e);
            },
        },
        713: {
            name: "ObjectData Preview File Format Version",
            description: (e, t) => {
                let i = {
                        "00": { "00": "1" },
                        "01": { "01": "1", "02": "2", "03": "3", "04": "4" },
                        "02": { "04": "4" },
                        "03": { "01": "5.0", "02": "6.0" },
                        "04": { "01": "1.40" },
                        "05": { "01": "2" },
                        "06": { "01": "1" },
                        11: { "01": "1.02" },
                        20: { "01": "3.1", "02": "4.0", "03": "5.0", "04": "5.5" },
                        21: { "02": "2.0" },
                    },
                    r = (0, n.Jn)(e);
                if (t["ObjectData Preview File Format"]) {
                    let e = (0, n.Jn)(t["ObjectData Preview File Format"].value);
                    if (i[e] && i[e][r]) return i[e][r];
                }
                return r;
            },
        },
        714: "ObjectData Preview Data",
        1802: { name: "Size Mode", description: (e) => e[0].toString() },
        1812: {
            name: "Max Subfile Size",
            description: (e) => {
                let t = 0;
                for (let i = 0; i < e.length; i++) t = (t << 8) + e[i];
                return t.toString();
            },
        },
        1882: {
            name: "ObjectData Size Announced",
            description: (e) => {
                let t = 0;
                for (let i = 0; i < e.length; i++) t = (t << 8) + e[i];
                return t.toString();
            },
        },
        1887: {
            name: "Maximum ObjectData Size",
            description: (e) => {
                let t = 0;
                for (let i = 0; i < e.length; i++) t = (t << 8) + e[i];
                return t.toString();
            },
        },
    },
};
function o(e) {
    let t = (0, n.Jn)(e);
    return t.length >= 8 ? t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2) : t;
}
function a(e) {
    let t = (0, n.Jn)(e),
        i = t;
    return (
        t.length >= 6 &&
            ((i = t.substr(0, 2) + ":" + t.substr(2, 2) + ":" + t.substr(4, 2)),
            11 === t.length && (i += t.substr(6, 1) + t.substr(7, 2) + ":" + t.substr(9, 2))),
        i
    );
}
function s(e) {
    let t = (0, n.Jn)(e);
    if ("\x1b%G" === t) return "UTF-8";
    if ("\x1b%5" === t) return "Windows-1252";
    if ("\x1b%/G" === t) return "UTF-8 Level 1";
    if ("\x1b%/H" === t) return "UTF-8 Level 2";
    if ("\x1b%/I" === t) return "UTF-8 Level 3";
    else if ("\x1b/A" === t) return "ISO-8859-1";
    else if ("\x1b/B" === t) return "ISO-8859-2";
    else if ("\x1b/C" === t) return "ISO-8859-3";
    else if ("\x1b/D" === t) return "ISO-8859-4";
    else if ("\x1b/@" === t) return "ISO-8859-5";
    else if ("\x1b/G" === t) return "ISO-8859-6";
    else if ("\x1b/F" === t) return "ISO-8859-7";
    else if ("\x1b/H" === t) return "ISO-8859-8";
    return "Unknown";
}
